import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4B2E00] text-white pt-10 pb-4 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-yellow-400 text-xl font-extrabold mb-2">NOMOMICS</h2>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <Mail size={16} /> <span>Nomomics.Com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} /> <span>+1 234 456 678 89</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook className="bg-blue-600 p-1 rounded-full" size={24} /></a>
            <a href="#"><Twitter className="bg-black p-1 rounded-full" size={24} /></a>
            <a href="#"><Instagram className="bg-pink-500 p-1 rounded-full" size={24} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold mb-2">Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold mb-2">Product</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">Categories</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-2">Newsletter</h3>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black bg-white rounded-md outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/70">
        Copyright {new Date().getFullYear()} Nomomics.Com All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
