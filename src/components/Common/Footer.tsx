import React from 'react';
import { Twitter, FileText, Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="w-4/6 mx-auto px-4">
        {/* Logo and Description */}
        <div className="mb-12">
          <div className="text-2xl text-gray-700 font-semibold mb-4">LAWBridge</div>
          <p className="text-gray-500 max-w-2xl">
            LAWBridge is a cutting-edge digital platform designed to bridge the gap between legal professionals and technology. It empowers users with innovative tools to streamline legal processes, enhance collaboration, and ensure seamless compliance management. Whether you are managing legal documents, navigating regulatory requirements, or seeking advanced solutions for legal research, LAWBridge connects professionals with the resources they need to thrive in today’s digital landscape. With a user-friendly interface and robust features, LAWBridge revolutionizes the way legal services are accessed, managed, and executed, making the legal process more efficient, transparent, and accessible.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Resources Column */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Brand</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Help & Support</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Governance</a></li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Developers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Technical Paper</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Security</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Bug Bounty</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Terms of Use</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <div className="w-5 h-5">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.7,3.6H4.3c-0.4,0-0.7,0.3-0.7,0.7v15.4c0,0.4,0.3,0.7,0.7,0.7h15.4c0.4,0,0.7-0.3,0.7-0.7V4.3 C20.4,3.9,20.1,3.6,19.7,3.6z M12,17.5c-3,0-5.5-2.5-5.5-5.5S9,6.5,12,6.5s5.5,2.5,5.5,5.5S15,17.5,12,17.5z" />
              </svg>
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <FileText size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <div className="w-5 h-5">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z" />
              </svg>
            </div>
          </a>
        </div>

        <div className="text-gray-600 text-sm mt-10 flex justify-end w-full">
          <span>© 2024 LAWBridge. All rights reserved.</span>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-10" />

      </div>
    </div>
  );
};

export default Footer;