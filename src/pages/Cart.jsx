import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { TIME_SLOTS } from '../config/constants';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice,
    appointmentDate,
    appointmentTime,
    setAppointmentDate,
    setAppointmentTime
  } = useCart();
  
  const navigate = useNavigate();
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  // Get tomorrow's date for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  // Get date 3 months from now for max date attribute
  const threeMonthsLater = new Date();
  threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
  const threeMonthsLaterStr = threeMonthsLater.toISOString().split('T')[0];

  const handleCheckout = (e) => {
    e.preventDefault();
    
    // Validate date and time
    let isValid = true;
    
    if (!appointmentDate) {
      setDateError('Please select an appointment date');
      isValid = false;
    } else {
      setDateError('');
    }
    
    if (!appointmentTime) {
      setTimeError('Please select an appointment time');
      isValid = false;
    } else {
      setTimeError('');
    }
    
    if (isValid) {
      navigate('/checkout');
    }
  };

  // Clear errors when inputs change
  useEffect(() => {
    if (appointmentDate) setDateError('');
  }, [appointmentDate]);
  
  useEffect(() => {
    if (appointmentTime) setTimeError('');
  }, [appointmentTime]);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
            <div className="bg-white rounded-lg shadow-md p-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                You haven't added any services to your cart yet.
              </p>
              <Link 
                to="/booking" 
                className="px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition inline-flex items-center"
              >
                Browse Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-semibold mb-8 text-center">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Selected Services</h2>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                    <div className="sm:flex-1 mb-4 sm:mb-0">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-500">{item.duration}</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      
                      <span className="font-semibold">${item.price * item.quantity}</span>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="mb-6">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${getTotalPrice()}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${getTotalPrice()}</span>
                </div>
              </div>
              
              <form onSubmit={handleCheckout}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    <Calendar className="h-5 w-5 inline-block mr-2" />
                    Select Date
                  </label>
                  <input 
                    type="date" 
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={tomorrowStr}
                    max={threeMonthsLaterStr}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                      dateError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {dateError && <p className="text-red-500 text-sm mt-1">{dateError}</p>}
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    <Clock className="h-5 w-5 inline-block mr-2" />
                    Select Time
                  </label>
                  <select 
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                      timeError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a time slot</option>
                    {TIME_SLOTS.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {timeError && <p className="text-red-500 text-sm mt-1">{timeError}</p>}
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <Link to="/booking" className="text-rose-600 hover:text-rose-700 transition">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;