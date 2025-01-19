import React from 'react';
import { PowerIcon, PhoneIcon } from '@heroicons/react/16/solid';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-2xl font-bold">GoalGetter</h1>
          <p className="text-[#9CA3AF]">Join the biggest football tournaments in your area.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-[#9CA3AF]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9CA3AF]">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9CA3AF]">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9CA3AF]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-[#9CA3AF]" />
                <span>support@goalgetter.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <PhoneIcon className="h-5 w-5 text-[#9CA3AF]" />
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex items-center justify-center md:justify-start space-x-4">
              <a href="#" className="text-[#9CA3AF] hover:text-white">
                <EnvelopeIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-white">
                <EnvelopeIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-white">
                <EnvelopeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-[#9CA3AF]">
          <p>&copy; 2025 GoalGetter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
