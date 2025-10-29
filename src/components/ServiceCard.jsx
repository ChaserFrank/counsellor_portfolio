import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ServiceCard = ({ service }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    addToCart(service);
    navigate('/booking');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
         
          <div className="flex space-x-2">
            <button
              onClick={() => navigate(`/services/${service.id}`)}
              className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200 transition flex items-center"
            >
              <Info className="h-4 w-4 mr-1" />
              Details
            </button>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-rose-600 rounded-md text-white flex items-center hover:bg-rose-700 transition"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;