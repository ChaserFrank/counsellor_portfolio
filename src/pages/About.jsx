import { Link } from 'react-router-dom';
import { CheckCircle, GraduationCap, Award, BookOpen, ArrowRight } from 'lucide-react';
import { COUNSELOR_NAME, COUNSELOR_TITLE } from '../config/constants';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-rose-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About {COUNSELOR_NAME}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A compassionate and dedicated mental health professional committed to 
            helping clients overcome challenges and achieve emotional wellbeing.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="WhatsApp Joan.jpg"
                alt={COUNSELOR_NAME}
                className="rounded-lg shadow-xl relative z-10 w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Meet {COUNSELOR_NAME}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a {COUNSELOR_TITLE} with over 5 years of experience, I am passionate about providing 
                compassionate care that addresses the whole person. My journey in mental health 
                counselling began after witnessing the transformative power of therapy in my own life.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I believe that every individual has the capacity for growth and healing, and I am 
                committed to creating a safe, non-judgmental space where clients can explore their 
                challenges and discover their strengths. My integrated approach combines evidence-based 
                techniques with empathetic listening to help clients overcome obstacles and build resilience.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're struggling with depression, anxiety, relationship issues, or trauma, 
                I am here to support you on your journey toward wellness and personal growth.
              </p>
              <Link
                to="/booking"
                className="px-6 py-2 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition inline-flex items-center"
              >
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Qualifications */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <GraduationCap className="h-8 w-8 mr-3 text-rose-600" />
                Education & Certifications
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Psychoeducation</h3>
                    <p className="text-gray-600">Mind and Beyond Counselling Centre</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Drug abuse training</h3>
                    <p className="text-gray-600">Kenya Institute of Business and Counselling Studies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Social and Communication Skills</h3>
                    <p className="text-gray-600">Bridge Solution</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Computer Application</h3>
                    <p className="text-gray-600">Kenya National Library Service</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Baking and Pastry</h3>
                    <p className="text-gray-600">Valentine School of Cake</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <BookOpen className="h-8 w-8 mr-3 text-rose-600" />
                My Therapeutic Approach
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                My counselling philosophy is rooted in the belief that each person has unique 
                needs and experiences. I draw from multiple therapeutic modalities to create 
                a personalized approach for each client, including:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Cognitive Behavioral Therapy (CBT)</h3>
                    <p className="text-gray-600">Addressing negative thought patterns to improve mood and behavior</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Mindfulness-Based Interventions</h3>
                    <p className="text-gray-600">Developing present-moment awareness to reduce stress and anxiety</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Solution-Focused Brief Therapy</h3>
                    <p className="text-gray-600">Building on strengths to create positive change</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Trauma-Informed Care</h3>
                    <p className="text-gray-600">Recognizing the impact of trauma and creating safety</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center flex items-center justify-center">
            <Award className="h-8 w-8 mr-3 text-rose-600" />
            Professional Experience
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-semibold text-xl">Worked at Stegrami Rehabilitation Center and Primerose Rehabilitation center.</h3>
                <p className="text-gray-700 mt-2">
                  Providing individual and group therapy for clients with diverse needs, including 
                  depression, anxiety, trauma, addiction, and relationship issues. Developed specialized 
                  programs for trauma recovery and anxiety management.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-semibold text-xl">Counselling Programs Director</h3>
                <p className="text-gray-700 mt-2">
                  Led a team of mental health professionals in providing comprehensive care for patients
                  and people who live in prison with severe mental health conditions. Developed and implemented treatment protocols 
                  and training programs for staff.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-semibold text-xl">Trauma Therapist</h3>
                <p className="text-gray-700 mt-2">
                 As a dedicated trauma therapist, I have spent the past five years helping individuals 
                 navigate the aftermath of emotionally and psychologically distressing experiences. 
                 I specialize in treating survivors of childhood abuse, domestic violence, 
                 sexual assault, grief, and PTSD using trauma-informed, client-centered approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            I'm here to support you every step of the way. Let's work together to help you achieve emotional wellness and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/booking"
              className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-md hover:bg-gray-50 transition inline-flex items-center justify-center"
            >
              Book a Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent text-white border-2 border-white font-semibold rounded-md hover:bg-white hover:bg-opacity-10 transition inline-flex items-center justify-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;