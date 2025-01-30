import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto max-w-7xl flex justify-between items-center h-18 px-4 sm:px-6 lg:px-8 relative">
      {/* Logo */}
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" className="h-12" />
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="hidden lg:flex gap-6 list-none lg:block">
        <li className="hidden lg:block">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Menu
          </a>
        </li>
        <li className="hidden lg:block">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Location
          </a>
        </li>
        <li className="hidden lg:block">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
        </li>
        <li className="hidden lg:block">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </li>
      </ul>

      {/* Login Button (Visible on Desktop, Hidden on Mobile) */}
      <button className="hidden lg:block bg-red-600 text-white font-medium px-6 py-2">
        Login
      </button>

      {/* Mobile Menu Button (Only Visible on Mobile) */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-white shadow-md z-50 w-48 rounded-lg">
          <ul className="flex flex-col gap-4 p-4 list-none">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Location
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
            <li>
              <button className="w-full bg-red-600 text-white font-medium px-6 py-2">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
