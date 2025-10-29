import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { sendPaymentConfirmation } from '../utils/emailService.js';

const router = express.Router();
const prisma = new PrismaClient();

// PayPal API configuration
const PAYPAL_API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

const paypalButtons = window.paypal.Buttons({
   style: {
        shape: "rect",
        layout: "vertical",
        color: "gold",
        label: "paypal",
    }}).render('#paypal-button-container'); 

// Get PayPal access token
const getPayPalAccessToken = async () => {
  const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET_KEY}`).toString('base64');
  
  try {
    const response = await axios.post(`${PAYPAL_API_BASE}/v1/oauth2/token`, 
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting PayPal access token:', error);
    throw error;
  }
};

// Create PayPal order
router.post('/create-paypal-order', async (req, res) => {
  try {
    const { amount, currency = 'USD' } = req.body;
    const accessToken = await getPayPalAccessToken();

    const response = await axios.post(
      `${PAYPAL_API_BASE}/v2/checkout/orders`,
      {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: currency,
            value: amount.toString()
          }
        }]
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }  
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create PayPal order'
    });
  }
});

// Capture PayPal payment
router.post('/capture-paypal-payment', async (req, res) => {
  try {
    const { orderID } = req.body;
    const accessToken = await getPayPalAccessToken();

    const response = await axios.post(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Save payment details to database
    const paymentData = response.data;
    const payment = await prisma.payment.create({
      data: {
        transactionRef: paymentData.id,
        amount: parseFloat(paymentData.purchase_units[0].payments.captures[0].amount.value),
        currency: paymentData.purchase_units[0].payments.captures[0].amount.currency_code,
        status: paymentData.status,
        customerName: req.body.customerName,
        customerEmail: req.body.customerEmail,
        customerPhone: req.body.customerPhone
      }
    });

     // Send confirmation email
    await sendPaymentConfirmation(payerEmail, {
      items,
      totalAmount,
      paymentId: payment.transactionRef
    });

    res.json({
      success: true,
      data: payment
    });
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to capture payment'
    });
  }
});

export default router;