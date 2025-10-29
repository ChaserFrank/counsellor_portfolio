import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../config/constants';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const service = SERVICES.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Service Not Found</h1>
            <Link 
              to="/services"
              className="text-rose-600 hover:text-rose-700 transition flex items-center justify-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    addToCart(service);
    navigate('/booking');
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          to="/services"
          className="text-rose-600 hover:text-rose-700 transition inline-flex items-center mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-semibold mb-2">{service.title}</h1>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-2xl font-bold text-rose-600">${service.price}</p>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 mb-6">{service.description}</p>
              <div className="whitespace-pre-line text-gray-700">
                {service.longDescription}
              </div>
            </div>

            <button
              onClick={handleBookNow}
              className="w-full md:w-auto px-8 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;