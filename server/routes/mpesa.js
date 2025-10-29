/* import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Generate access token
const getAccessToken = async () => {
  const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
  
  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

// Initiate STK Push
router.post('/stkpush', async (req, res) => {
  try {
    const { phoneNumber, amount } = req.body;
    const accessToken = await getAccessToken();
    
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString('base64');

    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: 'Counseling and Rehab Center',
        TransactionDesc: 'Counseling and Rehab Center',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error('STK push error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to initiate payment',
      error: error.response?.data || error.message,
    });
  }
});

// Callback URL endpoint
router.post('/callback', async (req, res) => {
  try {
    const { Body } = req.body;
    
    if (Body.stkCallback.ResultCode === 0) {
      // Payment successful
      const payment = {
        merchantRequestID: Body.stkCallback.MerchantRequestID,
        checkoutRequestID: Body.stkCallback.CheckoutRequestID,
        resultCode: Body.stkCallback.ResultCode,
        resultDesc: Body.stkCallback.ResultDesc,
        amount: Body.stkCallback.CallbackMetadata.Item.find(item => item.Name === 'Amount').Value,
        mpesaReceiptNumber: Body.stkCallback.CallbackMetadata.Item.find(item => item.Name === 'MpesaReceiptNumber').Value,
        transactionDate: Body.stkCallback.CallbackMetadata.Item.find(item => item.Name === 'TransactionDate').Value,
        phoneNumber: Body.stkCallback.CallbackMetadata.Item.find(item => item.Name === 'PhoneNumber').Value,
      };

      // Save payment details to database
      // Update booking status
      // Send confirmation email
      
      res.json({ success: true });
    } else {
      // Payment failed
      console.error('Payment failed:', Body.stkCallback.ResultDesc);
      res.json({ success: false, error: Body.stkCallback.ResultDesc });
    }
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Query transaction status
router.post('/query', async (req, res) => {
  try {
    const { checkoutRequestID } = req.body;
    const accessToken = await getAccessToken();
    
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString('base64');

    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query',
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestID,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error('Query error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to query transaction status',
      error: error.response?.data || error.message,
    });
  }
});

export default router; */