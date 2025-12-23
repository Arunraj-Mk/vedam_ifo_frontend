import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vedhamInfoImage from '@/assets/images/vedham_info.jpeg?url';

const LoginNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent relative w-full">
      <div className="w-full max-w-[1209.65px] mx-auto">
        <div className="flex items-center justify-between h-[61.94px]">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center w-[54.65px] h-[61.94px] flex-shrink-0"
            aria-label="Home"
          >
            <img
              src={vedhamInfoImage}
              alt="Vedam Info Logo"
              className="w-[54.65px] h-[61.94px] object-contain"
            />
          </Link>

          {/* Center Navigation - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center gap-6 h-6">
            <Link
              to="/"
              className="text-black font-normal text-base leading-none cursor-pointer hover:underline transition-all font-['Poppins']"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black font-normal text-base leading-none cursor-pointer hover:underline transition-all font-['Poppins']"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-black font-normal text-base leading-none cursor-pointer hover:underline transition-all font-['Poppins']"
            >
              Contact
            </Link>
          </div>

          {/* Right Buttons Container */}
          <div className="flex items-center gap-[22px] h-12">
            {/* Desktop Buttons */}
            <Link
              to="/login"
              className="hidden lg:flex items-center justify-center w-[130px] h-12 px-[10px] rounded-xl border border-black bg-transparent text-black font-semibold text-base leading-none cursor-pointer font-['Poppins'] hover:bg-black hover:text-white transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Log In
            </Link>
            <Link
              to="/get-started"
              className="hidden lg:flex items-center justify-center w-[130px] h-12 px-[10px] rounded-xl border border-black bg-black text-white font-semibold text-base leading-none cursor-pointer font-['Poppins'] hover:opacity-90 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Get Started
            </Link>

            {/* Hamburger Menu Button - Visible on tablet and mobile */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-black p-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-5 pb-4 space-y-3 bg-white border-t border-gray-200">
          <div className="flex items-center justify-end mb-2 pt-2">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-700 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-black font-normal text-base py-2 cursor-pointer hover:underline transition-all font-['Poppins']"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-black font-normal text-base py-2 cursor-pointer hover:underline transition-all font-['Poppins']"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-black font-normal text-base py-2 cursor-pointer hover:underline transition-all font-['Poppins']"
          >
            Contact
          </Link>
          <div className="flex flex-col gap-[22px] pt-2 border-t border-gray-200">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full h-12 px-[10px] rounded-xl border border-black bg-transparent text-black font-semibold text-base leading-none cursor-pointer font-['Poppins'] hover:bg-black hover:text-white transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Log In
            </Link>
            <Link
              to="/get-started"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full h-12 px-[10px] rounded-xl border border-black bg-black text-white font-semibold text-base leading-none cursor-pointer font-['Poppins'] hover:opacity-90 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;

