import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COUNSELOR_EMAIL, COUNSELOR_PHONE, WORKING_HOURS } from '../config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="ml-2 text-xl font-semibold">Transforming Lives</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing compassionate mental health services to help you navigate life's challenges and find your path to wellbeing.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16MtqRmSsR/" className="text-gray-300 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://x.com/Elevat_2001?t=UmASimk78pIZyVuDEneoFw&s=09" className="text-gray-300 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/elevat_mentorship?utm_source=qr&igsh=enJnc2xqaXVydDF6" className="text-gray-300 hover:text-white transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-white transition">Book a Session</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Depression Therapy</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Anxiety Management</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Addiction Recovery</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Relationship Counselling</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Trauma Recovery</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Family Therapy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-500 mt-1 mr-3" />
                <span className="text-gray-300">2344, Kiambu</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-rose-500 mr-3" />
                <a href={`tel:${COUNSELOR_PHONE}`} className="text-gray-300 hover:text-white transition">
                  {COUNSELOR_PHONE}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-rose-500 mr-3" />
                <a href={`mailto:${COUNSELOR_EMAIL}`} className="text-gray-300 hover:text-white transition">
                  {COUNSELOR_EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-rose-500 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300">Monday - Friday: {WORKING_HOURS.monday}</p>
                  <p className="text-gray-300">Saturday: {WORKING_HOURS.saturday}</p>
                  <p className="text-gray-300">Sunday: {WORKING_HOURS.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} Transforming Lives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;