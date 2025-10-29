import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    
    const savedDate = localStorage.getItem('appointmentDate');
    if (savedDate) setAppointmentDate(savedDate);
    
    const savedTime = localStorage.getItem('appointmentTime');
    if (savedTime) setAppointmentTime(savedTime);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save appointment details to localStorage
  useEffect(() => {
    if (appointmentDate) localStorage.setItem('appointmentDate', appointmentDate);
    if (appointmentTime) localStorage.setItem('appointmentTime', appointmentTime);
  }, [appointmentDate, appointmentTime]);

  const addToCart = (service) => {
    setCartItems(prevItems => {
      // Check if the service is already in the cart
      const exists = prevItems.find(item => item.id === service.id);
      if (exists) {
        // If already in cart, increment quantity
        return prevItems.map(item => 
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If not in cart, add with quantity 1
        return [...prevItems, { ...service, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (serviceId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== serviceId));
  };

  const updateQuantity = (serviceId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(serviceId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === serviceId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppointmentDate('');
    setAppointmentTime('');
    localStorage.removeItem('cart');
    localStorage.removeItem('appointmentDate');
    localStorage.removeItem('appointmentTime');
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    appointmentDate,
    appointmentTime,
    setAppointmentDate,
    setAppointmentTime,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}