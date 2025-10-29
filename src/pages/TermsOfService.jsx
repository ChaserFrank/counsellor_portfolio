import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          to="/"
          className="text-rose-600 hover:text-rose-700 transition inline-flex items-center mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                We provide professional counseling and therapy services. Our services include but are not 
                limited to individual therapy, couples counseling, family therapy, and group sessions.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Sessions are typically 50-60 minutes in duration</li>
                <li>Services are provided by licensed professional counselors</li>
                <li>Online and in-person sessions are available</li>
                <li>Emergency services are not provided - for emergencies, please contact local emergency services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a client, you are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Arriving on time for scheduled appointments</li>
                <li>Maintaining confidentiality of any group session information</li>
                <li>Following treatment recommendations and homework assignments</li>
                <li>Paying for services as agreed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment is required at the time of service. We accept:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Credit/Debit cards</li>
                <li>Mobile money payments</li>
                <li>Bank transfers</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Insurance reimbursement documentation is available upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality in accordance with professional ethics and legal requirements. 
                Exceptions to confidentiality include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Risk of harm to self or others</li>
                <li>Suspected abuse of children or vulnerable adults</li>
                <li>Legal requirements or court orders</li>
                <li>Insurance billing requirements (if applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Communication Policy</h2>
              <p className="text-gray-700 mb-4">
                Our communication policies include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Email is not guaranteed confidential and should not be used for emergencies</li>
                <li>Phone calls will be returned within 24 business hours</li>
                <li>Text messaging is for scheduling purposes only</li>
                <li>Social media connections with clients are not accepted</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Termination of Services</h2>
              <p className="text-gray-700 mb-4">
                Services may be terminated under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Completion of treatment goals</li>
                <li>Client request</li>
                <li>Therapist determination that services are no longer beneficial</li>
                <li>Repeated missed appointments</li>
                <li>Non-payment of fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to our website. Continued use of our services constitutes acceptance of new terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;