import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CancellationPolicy = () => {
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
          <h1 className="text-3xl font-semibold mb-8">Cancellation Policy</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Standard Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                We understand that circumstances may arise that require you to cancel or reschedule your appointment. 
                To maintain the quality and availability of our services, we have established the following cancellation policy:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>24-hour notice is required for all cancellations</li>
                <li>Cancellations made with less than 24 hours notice will be charged the full session fee</li>
                <li>No-shows are charged the full session fee</li>
                <li>Late arrivals will end at the scheduled time and be charged the full fee</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How to Cancel or Reschedule</h2>
              <p className="text-gray-700 mb-4">
                You can cancel or reschedule your appointment through:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Your client portal</li>
                <li>Phone call during business hours</li>
                <li>Email (for non-urgent changes with more than 24 hours notice)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Emergency Situations</h2>
              <p className="text-gray-700 mb-4">
                We understand that true emergencies occur. The following situations may qualify for waiver of the cancellation fee:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Medical emergencies (documentation may be required)</li>
                <li>Severe illness</li>
                <li>Death in the family</li>
                <li>Natural disasters or severe weather conditions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Multiple Cancellations</h2>
              <p className="text-gray-700 mb-4">
                Frequent cancellations, even with proper notice, may impact the therapeutic process and result in:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Discussion about commitment to therapy</li>
                <li>Adjustment of session frequency</li>
                <li>Referral to another provider if needed</li>
                <li>Termination of services in extreme cases</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Payment of Cancellation Fees</h2>
              <p className="text-gray-700 mb-4">
                Cancellation fees are processed as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Charged to the card on file</li>
                <li>Due before scheduling next appointment</li>
                <li>Non-refundable</li>
                <li>Not billable to insurance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Group Session Cancellations</h2>
              <p className="text-gray-700 mb-4">
                For group therapy sessions:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>48-hour notice required for cancellation</li>
                <li>Full fee charged for late cancellations</li>
                <li>No refunds for missed sessions</li>
                <li>Make-up sessions are not available for groups</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Online Session Cancellations</h2>
              <p className="text-gray-700 mb-4">
                For online therapy sessions:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Standard 24-hour cancellation policy applies</li>
                <li>Technical difficulties on client's end do not qualify for fee waiver</li>
                <li>Session may be converted to phone if video is not working</li>
                <li>Therapist will attempt to reconnect for 15 minutes if connection is lost</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;