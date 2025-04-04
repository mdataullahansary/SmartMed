import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Emergency Guidelines
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/first-aid-tips" className="text-gray-400 hover:text-white">
                  First Aid Tips
                </Link>
              </li>
              <li>
                <Link to="/emergency-procedures" className="text-gray-400 hover:text-white">
                  Emergency Procedures
                </Link>
              </li>
              <li>
                <Link to="/safety-measures" className="text-gray-400 hover:text-white">
                  Safety Measures
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Hospital Network
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/partner-hospitals" className="text-gray-400 hover:text-white">
                  Partner Hospitals
                </Link>
              </li>
              <li>
                <Link to="/medical-centers" className="text-gray-400 hover:text-white">
                  Medical Centers
                </Link>
              </li>
              <li>
                <Link to="/specialists" className="text-gray-400 hover:text-white">
                  Specialists
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Insurance</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/coverage-details" className="text-gray-400 hover:text-white">
                  Coverage Details
                </Link>
              </li>
              <li>
                <Link to="/claims-process" className="text-gray-400 hover:text-white">
                  Claims Process
                </Link>
              </li>
              <li>
                <Link to="/network-providers" className="text-gray-400 hover:text-white">
                  Network Providers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Help Center</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact-support" className="text-gray-400 hover:text-white">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 PULSE CARE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
