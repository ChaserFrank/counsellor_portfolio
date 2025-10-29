import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6 flex justify-center">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-semibold mb-4">Payment Successful!</h1>
            <p className="text-gray-700 mb-8">
              Your booking has been confirmed. A confirmation email has been sent to your email address.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-rose-600 mr-2" />
                <h2 className="text-xl font-medium">Appointment Details</h2>
              </div>
              
              <p className="mb-2">
                <span className="font-medium">Booking ID:</span> BOK-{Math.floor(Math.random() * 1000000)}
              </p>
              <p className="mb-2">
                <span className="font-medium">Status:</span> 
                <span className="text-green-600 font-medium ml-1">Confirmed</span>
              </p>
              <p className="mb-6">
                <span className="font-medium">Payment Method:</span>
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700">
                  Please avail yourself 10 minutes before your scheduled appointment time. If you need to 
                  reschedule or cancel, please do so at least 24 hours in advance.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition flex items-center justify-center"
              >
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;