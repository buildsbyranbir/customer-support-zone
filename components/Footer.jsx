import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">CS — Ticket System</h4>
            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Saled</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Products & Services</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h5 className="font-semibold text-white mb-4">Information</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Social Links</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <span>🕊️</span> <a href="#" className="hover:text-white">@CS — Ticket System</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>💼</span> <a href="#" className="hover:text-white">@CS — Ticket System</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📘</span> <a href="#" className="hover:text-white">@CS — Ticket System</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span> <a href="mailto:support@cst.com" className="hover:text-white">support@cst.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
