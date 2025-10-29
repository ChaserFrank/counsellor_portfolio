import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import './index.css';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    "enable-funding": "venmo",
    "disable-funding": "",
    //"buyer-country": "US",
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons,card-fields",
    "data-sdk-integration-source": "developer-studio",
  }; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </PayPalScriptProvider>
  </StrictMode>
);
