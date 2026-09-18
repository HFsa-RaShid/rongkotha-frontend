

"use client";

import React, { useState } from 'react';
import { FiShare2, FiInstagram, FiPlay, FiHash } from 'react-icons/fi';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#2d2a2a] text-[#c4bebe] font-sans w-full">
      {/* Top Main Footer Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        {/* Main Flex Parent with justify-between */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          
          {/* DIV 1: Column 1 (Newsletter & About) */}
          <div className="w-full lg:max-w-xs space-y-8 flex-shrink-0">
            {/* Newsletter */}
            <div>
              <h3 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                NEWSLETTER
              </h3>
              <p className="text-xs leading-relaxed text-[#a8a2a2] mb-4">
                Sign up to our newsletter to receive exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border border-[#555050] text-xs text-white px-3 py-2.5 focus:outline-none focus:border-white flex-1 placeholder-[#888]"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black text-xs font-semibold px-4 py-2.5 tracking-wider hover:bg-gray-200 transition-colors uppercase"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>

            {/* About */}
            <div className="pt-2">
              <h3 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                ABOUT
              </h3>
              <p className="text-xs leading-relaxed text-[#a8a2a2] mb-4">
                Rong Kotha combines India&apos;s centuries-old weaving traditions with contemporary style- so that what looks good, feels good too.
              </p>
              <div className="text-xs text-[#a8a2a2] space-y-1">
                <p>Toll Free: 080-456-80200</p>
                <p>Email: info@rongkotha.com</p>
              </div>
            </div>
          </div>

          {/* DIV 2: Parent for Remaining 3 Columns */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-10 sm:gap-12 lg:gap-20">
            
            {/* Column 2: Customer Service */}
            <div className="min-w-[160px]">
              <h3 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                CUSTOMER SERVICE
              </h3>
              <ul className="space-y-2.5 text-xs text-[#a8a2a2]">
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Locate Our Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Return & Exchange Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="min-w-[160px]">
              <h3 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                QUICK LINKS
              </h3>
              <ul className="space-y-2.5 text-xs text-[#a8a2a2]">
                <li><a href="#" className="hover:text-white transition-colors">Return & Exchange Request</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us!</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">We Are Hiring!</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wholesale Enquiries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Franchise Enquiry</a></li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div className="min-w-[140px]">
              <h3 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                FOLLOW US
              </h3>
              <div className="flex items-center space-x-4 text-white">
                <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Share">
                  <FiShare2 size={18} />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Instagram">
                  <FiInstagram size={18} />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Play">
                  <FiPlay size={18} className="fill-current" />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Hashtag">
                  <FiHash size={18} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-[#3d3939] py-6 text-center text-xs tracking-wider text-[#a8a2a2] uppercase">
        <p className="mb-1">
          COPYRIGHT 2026 © RONG KOTHA PRIVATE LIMITED. ALL RIGHTS RESERVED.
        </p>
        <p className="italic capitalize font-serif text-sm text-[#c4bebe] lowercase first-letter:uppercase">
          Dipped in Love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;