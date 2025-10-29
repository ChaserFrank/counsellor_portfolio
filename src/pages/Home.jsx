import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES, BLOG_POSTS, COUNSELOR_NAME } from '../config/constants';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-rose-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
                Professional Counselor and a <span className="text-rose-600">Therapist</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Professional counseling to help you overcome challenges, find balance, 
                and live a more fulfilling life. Begin your journey to Emotional wellnesss. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="px-8 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition flex items-center justify-center"
                >
                  Book a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 bg-white text-gray-800 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-100 rounded-full opacity-70"></div>
                <img
                  src="/WhatsApp Joan.jpg"
                  alt="Professional Counselor"
                  className="rounded-lg shadow-xl relative z-10 w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/Joan.jpg"
                alt="Counselor photo"
                style={{ width: "550px" }}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">About {COUNSELOR_NAME}</h2>
              <p className="text-gray-700 mb-6">
                With over 5 years of experience in mental health counseling, I am dedicated to 
                providing compassionate care that addresses the whole person. My integrated approach 
                combines evidence-based techniques with empathetic listening to help clients overcome 
                challenges and build resilience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                  <span>Licensed Professional Counselor (LPC)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                  <span>Psychoeducation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                  <span>Certified in Trauma-Focused Cognitive Behavioral Therapy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                  <span>Specialized in Depression, Anxiety, and Relationship Counseling</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="px-6 py-2 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition inline-flex items-center"
              >
                Read Full Bio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Services Offered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional counseling services tailored to your specific needs, delivered with compassion and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-6 py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our clients have to say about their counseling experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Working with Joan Wambui helped me develop tools to manage my anxiety that I use every day. I'm finally able to enjoy my life without constant worry."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-blue-600 font-medium">MK</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Maria K.</h4>
                  <p className="text-gray-500 text-sm">Anxiety Management</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The marriage counseling sessions saved our relationship. We learned to communicate in ways we never had before, and our bond is stronger than ever."
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-green-600 font-medium">JT</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">James & Tina</h4>
                  <p className="text-gray-500 text-sm">Relationship Counseling</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "After my trauma, I couldn't see a way forward. Dr. Johnson guided me through processing what happened and helped me rebuild my sense of safety and trust."
              </p>
              <div className="flex items-center">
                <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-purple-600 font-medium">DL</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">David L.</h4>
                  <p className="text-gray-500 text-sm">Trauma Recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and resources to support your mental health journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="px-6 py-3 bg-white text-gray-800 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition inline-flex items-center"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
          <Link
            to="/booking"
            className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-md hover:bg-gray-50 transition inline-flex items-center"
          >
            Book Your First Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;