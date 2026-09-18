"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiPhoneCall, FiUser, FiSearch, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // বর্তমানে কোন রাউটে আছেন তা ট্র্যাক করার জন্য

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'GOWN', href: '/gown' },
    { name: 'CORD SET', href: '/cord-set' },
    { name: 'THREE PCS', href: '/three-pcs' },
    { name: 'ARTISANAL', href: '/artisanal' },
    { name: 'SALE', href: '/sale' },
  ];

  return (
    <header className="w-full bg-[#fcf9f6] text-[#7a1c1c] font-sans border-b border-[#f0ece6]">
      {/* Top Header Row */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Left: Phone Number */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium">
          <FiPhoneCall className="w-4 h-4 text-[#7a1c1c]" />
          <span>+880 1731310294</span>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/images/logo.svg" // আপানার লোগো ইমেজ পাথ এখানে দেবেন
              alt="Rong Kotha Logo"
              width={160}
              height={50}
              priority
              className="object-contain h-10 w-auto"
            />
          </Link>
        </div>

        {/* Right: Icons (User, Search, Cart) */}
        <div className="flex items-center space-x-5 text-[#7a1c1c]">
          <Link href="/account" aria-label="Account" className="hover:opacity-75 transition-opacity">
            <FiUser className="w-5 h-5 stroke-[1.8]" />
          </Link>
          
          <button aria-label="Search" className="hover:opacity-75 transition-opacity">
            <FiSearch className="w-5 h-5 stroke-[1.8]" />
          </button>
          
          <Link href="/cart" aria-label="Cart" className="relative hover:opacity-75 transition-opacity flex items-center">
            <FiShoppingBag className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute -top-1.5 -right-2 bg-[#7a1c1c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#7a1c1c] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Bottom Navigation Links Bar */}
      <div className="hidden md:block border-t border-[#f2ece6] py-3">
        <nav className="container mx-auto flex justify-center items-center space-x-10 text-xs tracking-[0.18em] font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:opacity-75 transition-all py-1 relative ${
                  isActive ? 'border-b-2 border-[#7a1c1c] pb-0.5 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#f2ece6] bg-[#fcf9f6] py-4 px-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-xs tracking-widest font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-1 ${
                    isActive ? 'font-bold border-l-2 border-[#7a1c1c] pl-2' : ''
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;