import React, { useState } from "react";
import {
    PayPalButtons,
    PayPalCardFieldsProvider,
    PayPalNameField,
    PayPalNumberField,
    PayPalExpiryField,
    PayPalCVVField,
    usePayPalCardFields,
} from "@paypal/react-paypal-js";

const Checkout = () => {
    const [isPaying, setIsPaying] = useState(false);
    const [billingAddress, setBillingAddress] = useState({
        addressLine1: "",
        addressLine2: "",
        adminArea1: "",
        adminArea2: "",
        countryCode: "",
        postalCode: "",
    });

    const createOrder = async () => {
        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cart: [
                        { sku: "1blwyeo8", quantity: 2 },
                    ],
                    totalAmount: 100.00, // Add total amount
                    email: "customer@example.com", // Add email
                }),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const orderData = await response.json();
            if (orderData.id) return orderData.id;
            throw new Error(orderData?.details?.[0]?.description || "Order creation failed");
        } catch (error) {
            console.error("Create order error:", error);
            throw error;
        }
    };

    const onApprove = async (data) => {
        try {
            const response = await fetch(`/api/orders/${data.orderID}/capture`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: "customer@example.com",
                    items: [{ name: "Service", price: 100.00 }],
                    totalAmount: 100.00,
                }),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const orderData = await response.json();
            const transaction =
                orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
                orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
            if (!transaction || transaction.status === "DECLINED") {
                throw new Error("Transaction was declined.");
            }
            console.log("Transaction successful:", transaction);
        } catch (error) {
            console.error("Capture order error:", error);
            throw error;
        }
    };

    const onError = (err) => {
        console.error("PayPal SDK error:", err);
    };

    const handleBillingAddressChange = (field, value) => {
        setBillingAddress((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 space-y-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">Complete Your Payment</h2>

                {/* PayPal Buttons */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-700">Pay with PayPal</h3>
                    <div className="border rounded-md p-4 bg-gray-50">
                        <PayPalButtons
                            style={{ layout: "vertical", color: "gold", shape: "rect", label: "paypal" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                            onError={onError}
                        />
                    </div>
                </div>

                {/* Card Fields */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-700">Pay with Debit or Credit Card</h3>
                    <div className="space-y-4">
                        <PayPalCardFieldsProvider
                            createOrder={createOrder}
                            onApprove={onApprove}
                            style={{
                                input: {
                                    "font-size": "16px",
                                    "font-family": "Arial",
                                    color: "#333",
                                },
                                ".invalid": { color: "red" },
                            }}
                        >
                            <div className="space-y-4">
                                <PayPalNameField />
                                <PayPalNumberField />
                                <div className="flex gap-4">
                                    <div className="flex-1"><PayPalExpiryField /></div>
                                    <div className="flex-1"><PayPalCVVField /></div>
                                </div>
                                
                                {/* Billing Address Inputs */}
                                <div className="space-y-2">
                                    {[
                                        ["addressLine1", "Address Line 1"],
                                        ["addressLine2", "Address Line 2"],
                                        ["adminArea1", "City/Region"],
                                        ["adminArea2", "State/Province"],
                                        ["postalCode", "Postal Code"],
                                        ["countryCode", "Country Code (e.g. US)"],
                                    ].map(([key, label]) => (
                                        <input
                                            key={key}
                                            type="text"
                                            placeholder={label}
                                            className="w-full border rounded-md px-3 py-2 text-sm"
                                            onChange={(e) => handleBillingAddressChange(key, e.target.value)}
                                        />
                                    ))}
                                </div>

                                <SubmitPayment isPaying={isPaying} setIsPaying={setIsPaying} billingAddress={billingAddress} />
                            </div>
                        </PayPalCardFieldsProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SubmitPayment = ({ isPaying, setIsPaying, billingAddress }) => {
    const { cardFieldsForm } = usePayPalCardFields();

    const handleClick = async () => {
        if (!cardFieldsForm) {
            return alert("Card fields not ready.");
        }

        const formState = await cardFieldsForm.getState();
        if (!formState.isFormValid) {
            return alert("Please complete all required card fields.");
        }

        setIsPaying(true);
        try {
            await cardFieldsForm.submit({ billingAddress });
        } catch (err) {
            console.error("Card submit error:", err);
        } finally {
            setIsPaying(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isPaying}
            className={`w-full py-2 px-4 text-white font-semibold rounded-md ${
                isPaying ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
            {isPaying ? "Processing..." : "Pay Now"}
        </button>
    );
};

export default Checkout;