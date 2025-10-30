import express from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { sendPaymentConfirmation } from '../utils/emailService.js';

const router = express.Router();
const prisma = new PrismaClient();

// PayPal API configuration
const PAYPAL_API_BASE =
  process.env.NODE_ENV === 'production'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

// 🔐 Helper: Get PayPal access token
const getPayPalAccessToken = async () => {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET_KEY}`
  ).toString('base64');

  const response = await axios.post(
    `${PAYPAL_API_BASE}/v1/oauth2/token`,
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response.data.access_token;
};

// 💳 Create PayPal order
router.post('/create-paypal-order', async (req, res) => {
  try {
    const { amount, currency = 'USD' } = req.body;
    const accessToken = await getPayPalAccessToken();

    const response = await axios.post(
      `${PAYPAL_API_BASE}/v2/checkout/orders`,
      {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: amount.toString(),
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error creating PayPal order:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: 'Failed to create PayPal order' });
  }
});

// 💰 Capture PayPal payment
router.post('/capture-paypal-payment', async (req, res) => {
  try {
    const { orderID, customerName, customerEmail, customerPhone, items, totalAmount } = req.body;
    const accessToken = await getPayPalAccessToken();

    const response = await axios.post(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const paymentData = response.data;
    const capture = paymentData.purchase_units?.[0]?.payments?.captures?.[0];

    const payment = await prisma.payment.create({
      data: {
        transactionRef: paymentData.id,
        amount: parseFloat(capture?.amount?.value || 0),
        currency: capture?.amount?.currency_code || 'USD',
        status: paymentData.status,
        customerName,
        customerEmail,
        customerPhone,
      },
    });

    // Send confirmation email (if email exists)
    if (customerEmail) {
      await sendPaymentConfirmation(customerEmail, {
        items,
        totalAmount,
        paymentId: payment.transactionRef,
      });
    }

    res.json({ success: true, data: payment });
  } catch (error) {
    console.error('Error capturing PayPal payment:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: 'Failed to capture payment' });
  }
});

export default router;
