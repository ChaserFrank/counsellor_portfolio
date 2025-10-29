import path from "path";
import { fileURLToPath } from "url";
import express from "express"; 
//import fetch from "node-fetch";
import "dotenv/config";
import pkg from "@paypal/paypal-server-sdk";
const {
    ApiError,
    Client,
    Environment,
    LogLevel,
    OrdersController,
    PaymentsController,
    generateClientToken
} =pkg;
import bodyParser from "body-parser";
import cors from "cors";
import { sendPaymentConfirmation } from './utils/emailService.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const express = require("express");
const path = require("path");
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use("/api", require("./routes/payments.js")); 

// Serve frontend build
app.use(express.static(path.join(__dirname, "../../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

const {
    PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET,
    PORT = 8080,
} = process.env;

const client = new Client({
    clientCredentialsAuthCredentials: {
        oAuthClientId: PAYPAL_CLIENT_ID,
        oAuthClientSecret: PAYPAL_CLIENT_SECRET,
    },
    timeout: 0,
    environment: Environment.Live,
    logging: {
        logLevel: LogLevel.Info,
        logRequest: { logBody: true },
        logResponse: { logHeaders: true },
    },
});

const ordersController = new OrdersController(client);
const paymentsController = new PaymentsController(client);

 // Create Order
const createOrder = async (cart, totalAmount) => {
    const payload = {
        body: {
            intent: "CAPTURE",
            purchaseUnits: [
                {
                    amount: {
                        currencyCode: "USD",
                        value: totalAmount.toString(),
                    },
                },
            ],
        },
        prefer: "return=representation",
    };

    try {
        const { body, ...httpResponse } = await ordersController.createOrder(payload);
        return {
            jsonResponse: body,
            httpStatusCode: httpResponse.statusCode,
        };
    } catch (error) {
        if (error instanceof ApiError) throw new Error(error.message);
        throw error;
    }  
}; 

/* app.post("/api/orders", async (req, res) => {
    try {
        const { cart, totalAmount } = req.body;
        const { jsonResponse, httpStatusCode } = await createOrder(cart, totalAmount);
        res.status(httpStatusCode).json(jsonResponse); // 
    } catch (err) {
        console.error("Create order failed:", err.message);
        res.status(500).json({ error: "Failed to create order" }); 
    }
}); */


app.post("/api/orders", async (req, res) => {
    try {
        const { cart, totalAmount, email, appointmentDate, appointmentTime } = req.body;

        if (!email) return res.status(400).json({ error: "Email is required." });
        if (!cart || cart.length === 0) return res.status(400).json({ error: "Cart cannot be empty." });

        const { jsonResponse, httpStatusCode } = await createOrder(cart, totalAmount);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
});

// Capture Order
const captureOrder = async (orderID) => {
    const collect = {
        id: orderID,
        prefer: "return=representation",
    };

    try {
        const { body, ...httpResponse } = await ordersController.captureOrder(collect);
        return {
            jsonResponse: body,
            httpStatusCode: httpResponse.statusCode,
        };
    } catch (error) {
        if (error instanceof ApiError) throw new Error(error.message);
        throw error;
    }
};

app.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
        const { orderID } = req.params;
        const { email, items, totalAmount, appointmentDate, appointmentTime } = req.body;

        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

        if (httpStatusCode === 200 || httpStatusCode === 201) {
            try {
                await sendPaymentConfirmation(email, {
                    items,
                    totalAmount,
                    paymentId: jsonResponse.id,
                    appointmentDate,
                    appointmentTime,
                });
            } catch (emailError) {
                console.error('Failed to send confirmation email:', emailError);
            }
        }

        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to capture order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
});

// Authorize Order
const authorizeOrder = async (orderID) => {
    const collect = {
        id: orderID,
        prefer: "return=minimal",
    };

    try {
        const { body, ...httpResponse } = await ordersController.authorizeOrder(collect);
        return {
            jsonResponse: body,
            httpStatusCode: httpResponse.statusCode,
        };
    } catch (error) {
        if (error instanceof ApiError) throw new Error(error.message);
        throw error;
    }
};

app.post("/api/orders/:orderID/authorize", async (req, res) => {
    try {
        const { orderID } = req.params;
        const { jsonResponse, httpStatusCode } = await authorizeOrder(orderID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to authorize order:", error);
        res.status(500).json({ error: "Failed to authorize order." });
    }
});

// Capture Authorization
const captureAuthorize = async (authorizationId) => {
    const collect = {
        authorizationId,
        prefer: "return=representation",
        body: {
            finalCapture: false,
        },
    };

    try {
        const { body, ...httpResponse } = await paymentsController.captureAuthorize(collect);
        return {
            jsonResponse: body,
            httpStatusCode: httpResponse.statusCode,
        };
    } catch (error) {
        if (error instanceof ApiError) throw new Error(error.message);
        throw error;
    }
};

app.post("/api/orders/:authorizationId/captureAuthorize", async (req, res) => {
    try {
        const { authorizationId } = req.params;
        const { jsonResponse, httpStatusCode } = await captureAuthorize(authorizationId);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to capture authorize:", error);
        res.status(500).json({ error: "Failed to capture authorize." });
    }
});

// Generate Client Token
app.get("/api/paypal/client-token", async (req, res) => {
    try {
        const { result } = await client.execute(new generateClientToken.GenerateTokenRequest());
        res.json({ client_token: result.client_token });
    } catch (error) {
        console.error("Failed to generate client token:", error);
        res.status(500).json({ error: "Failed to generate client token" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Node server is running on port ${PORT}`);
});