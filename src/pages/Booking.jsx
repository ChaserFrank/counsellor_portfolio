import { useState } from 'react';
import { SERVICES } from '../config/constants';
import ServiceCard from '../components/ServiceCard';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Booking = () => {
  const { getTotalItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredServices = SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-rose-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Session</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take the first step toward emotional wellness. Choose a service below to begin your healing journey.
          </p>
          {getTotalItems() > 0 && (
            <Link
              to="/Cart"
              className="mt-8 inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              View Cart ({getTotalItems()} items)
            </Link>
          )}
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          {/* Service Cards Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No services found matching "{searchTerm}"</h3>
              <p className="text-gray-500 mt-2">Try a different search term or browse all services.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition"
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Booking Information</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-4">
                <li>
                  <span className="font-medium">Select a Service:</span> Browse the services above and choose the one that best fits your needs.
                </li>
                <li>
                  <span className="font-medium">Add to Cart:</span> Click the "Book" button to add the service to your cart. You can add multiple sessions if needed.
                </li>
                <li>
                  <span className="font-medium">Schedule Your Appointment:</span> Select your preferred date and time for the session.
                </li>
                <li>
                  <span className="font-medium">Complete Payment:</span> Securely pay for your session using our payment system.
                </li>
                <li>
                  <span className="font-medium">Confirmation:</span> Receive an email confirmation with all the details of your appointment.
                </li>
              </ol>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Important Policies</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <span className="font-medium">Cancellation Policy:</span> Please provide at least 24 hours' notice if you need to cancel or reschedule your appointment to avoid being charged the full session fee.
                </li>
                <li>
                  <span className="font-medium">Late Arrival:</span> If you arrive late, your session will still end at the scheduled time to ensure the next client is not delayed.
                </li>
                <li>
                  <span className="font-medium">Payment:</span> Payment is required at the time of booking to secure your appointment.
                </li>
                <li>
                  <span className="font-medium">Confidentiality:</span> All sessions are completely confidential, with the standard ethical and legal limitations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;