import { Link } from 'react-router-dom';
import Button from './Button';
import vedhamInfoImage from '@/assets/images/vedham_info.jpeg?url';

const Navbar = () => {
  return (
    <nav className="bg-transparent  border-b border-gray-800/30 absolute top-0 left-0 right-0 z-50  w-full">
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
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('home');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base cursor-pointer"
            >
              About us
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm lg:text-base cursor-pointer"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <Button
              variant="tertiary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Log In
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Get Started
            </Button>

            <button className="md:hidden text-gray-300 hover:text-white transition-colors p-2">
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
