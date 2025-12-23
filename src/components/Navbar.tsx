import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import vedhamInfoImage from '@/assets/images/vedham_info.jpeg?url';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on mobile when clicking a link
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-transparent border-b border-gray-800/30 absolute top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={vedhamInfoImage}
                alt="Vedam Info Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base cursor-pointer"
            >
              Home
            </a>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base cursor-pointer"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base cursor-pointer"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <Link to="/login" className="hidden sm:inline-flex">
              <Button
                variant="tertiary"
                size="sm"
              >
                Log In
              </Button>
            </Link>
            <Link to="/get-started" className="hidden sm:inline-flex">
              <Button
                variant="secondary"
                size="sm"
              >
                Get Started
              </Button>
            </Link>

            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-[-63px]' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 lg:px-8 pb-4 space-y-3 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800/30">
          <div className="flex items-center justify-end mb-2 pt-2">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors p-2"
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
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="block text-gray-300 hover:text-white transition-colors font-medium py-2 cursor-pointer"
          >
            Home
          </a>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white transition-colors font-medium py-2 cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-300 hover:text-white transition-colors font-medium py-2 cursor-pointer"
          >
            Contact
          </Link>
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-800/30">
            <Link to="/login" className="w-full">
              <Button
                variant="tertiary"
                size="sm"
                className="w-full"
              >
                Log In
              </Button>
            </Link>
            <Link to="/get-started" className="w-full">
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
