import { useState } from 'react';
import { SERVICES } from '../config/constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional counseling services tailored to your specific needs, 
            delivered with compassion and expertise.
          </p>
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

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">What to Expect</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Initial Consultation</h3>
              <p className="text-gray-700 mb-4">
                Your journey begins with a 60-minute initial consultation. During this session, we'll discuss your concerns, 
                history, and goals for therapy. This helps me understand your unique situation and develop a personalized 
                treatment plan.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Comprehensive assessment of your current challenges</li>
                <li>Discussion of your personal history and background</li>
                <li>Identification of therapy goals and expectations</li>
                <li>Overview of recommended treatment approach</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Ongoing Sessions</h3>
              <p className="text-gray-700 mb-4">
                Regular sessions typically last 50-60 minutes and are scheduled weekly or biweekly, depending on your needs. 
                During these sessions, we'll work together to address your concerns and develop strategies for positive change.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Safe, confidential environment to explore challenges</li>
                <li>Evidence-based therapeutic techniques</li>
                <li>Development of practical coping skills</li>
                <li>Regular progress reviews and plan adjustments</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Payment & Insurance</h3>
              <p className="text-gray-700 mb-4">
                Sessions are priced according to the service type, as indicated on each service card. Payment is required at 
                the time of service and can be made securely through our booking system.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Multiple payment options available (credit card, mobile money)</li>
                <li>24-hour cancellation policy</li>
                <li>Sliding scale fees available for those experiencing financial hardship</li>
                <li>Insurance reimbursement documentation provided upon request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">How do I know if therapy is right for me?</h3>
              <p className="text-gray-700">
                Therapy can benefit anyone facing challenges in their life, whether it's dealing with stress, anxiety, 
                depression, relationship issues, or major life transitions. If you're feeling overwhelmed or stuck, 
                therapy can provide support, perspective, and practical strategies for moving forward.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">How long will I need therapy?</h3>
              <p className="text-gray-700">
                The duration of therapy varies depending on your specific needs and goals. Some clients benefit from short-term 
                therapy (8-12 sessions) focused on specific issues, while others prefer longer-term support for ongoing growth 
                and development. We'll regularly review your progress and adjust our approach as needed.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Is what I share in therapy confidential?</h3>
              <p className="text-gray-700">
                Confidentiality is a fundamental aspect of the therapeutic relationship. What you share in therapy will remain 
                private, with few exceptions required by law (such as risk of harm to yourself or others, or cases of abuse). 
                I'll explain the limits of confidentiality in detail during our first session.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">What if I need to cancel a session?</h3>
              <p className="text-gray-700">
                I understand that life can be unpredictable. If you need to cancel a session, please provide at least 24 hours' 
                notice to avoid being charged for the session. For emergency cancellations, please contact me as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Take the first step toward emotional wellness. Schedule a consultation today and start your path to a healthier, happier life.
          </p>
          <a 
            href="/booking" 
            className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-md hover:bg-gray-50 transition"
          >
            Book Your First Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;