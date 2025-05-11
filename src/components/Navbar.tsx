import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  isLoggedIn: boolean;
  userType: 'student' | 'client' | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, userType, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                College Freelance
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {!isLoggedIn && (
                <>
                  <Link
                    to="/"
                    className={`${
                      isActive('/') 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`${
                      isActive('/about') 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    About
                  </Link>
                </>
              )}
              {isLoggedIn && userType === 'student' && (
                <>
                  <Link
                    to="/student-dashboard"
                    className={`${
                      isActive('/student-dashboard') 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/projects"
                    className={`${
                      isActive('/projects') 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Browse Projects
                  </Link>
                  <Link
                    to="/applications"
                    className={`${
                      isActive('/applications') 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    My Applications
                  </Link>
                </>
              )}
              {isLoggedIn && userType === 'client' && (
                <>
                  <Link
                    to="/client-dashboard"
                    className={`${
                      isActive('/client-dashboard') 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-600'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {!isLoggedIn ? (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <button
                onClick={onLogout}
                className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Sign Out
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 top-16 bg-gradient-to-b from-white to-gray-50 shadow-lg z-50 h-screen overflow-y-auto">
          <div className="pt-4 pb-3 space-y-2 px-4">
            {!isLoggedIn && (
              <>
                <Link
                  to="/"
                  className={`block pl-4 pr-4 py-3 border-l-4 ${
                    isActive('/') 
                      ? 'border-blue-500 bg-blue-50 text-blue-600' 
                      : 'border-transparent text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600'
                  } text-lg font-medium rounded-r-lg transition-all duration-200`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block pl-4 pr-4 py-3 border-l-4 ${
                    isActive('/about') 
                      ? 'border-blue-500 bg-blue-50 text-blue-600' 
                      : 'border-transparent text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600'
                  } text-lg font-medium rounded-r-lg transition-all duration-200`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </>
            )}
            {isLoggedIn && userType === 'student' && (
              <>
                <Link
                  to="/student-dashboard"
                  className={`block pl-4 pr-4 py-3 border-l-4 ${
                    isActive('/student-dashboard') 
                      ? 'border-blue-500 bg-blue-50 text-blue-600' 
                      : 'border-transparent text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600'
                  } text-lg font-medium rounded-r-lg transition-all duration-200`}
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <Link
                  to="/projects"
                  className={`block pl-4 pr-4 py-3 border-l-4 ${
                    isActive('/projects') 
                      ? 'border-blue-500 bg-blue-50 text-blue-600' 
                      : 'border-transparent text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600'
                  } text-lg font-medium rounded-r-lg transition-all duration-200`}
                  onClick={toggleMenu}
                >
                  Browse Projects
                </Link>
                <Link
                  to="/applications"
                  className={`block pl-4 pr-4 py-3 border-l-4 ${
                    isActive('/applications') 
                      ? 'border-blue-500 bg-blue-50 text-blue-600' 
                      : 'border-transparent text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600'
                  } text-lg font-medium rounded-r-lg transition-all duration-200`}
                  onClick={toggleMenu}
                >
                  My Applications
                </Link>
              </>
            )}
            {isLoggedIn && userType === 'client' && (
              <>
                <Link
                  to="/client-dashboard"
                  className={`block pl-4 pr-4 py-3 border-l-4 ${
                    isActive('/client-dashboard') 
                      ? 'border-blue-500 bg-blue-50 text-blue-600' 
                      : 'border-transparent text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600'
                  } text-lg font-medium rounded-r-lg transition-all duration-200`}
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
          {/* Mobile auth buttons */}
          <div className="pt-6 pb-6 border-t border-gray-200 mt-4">
            {!isLoggedIn ? (
              <div className="space-y-3 px-4">
                <Link
                  to="/login"
                  className="block w-full px-4 py-3 text-center rounded-lg text-base font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                  onClick={toggleMenu}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-3 text-center rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="px-4">
                <button
                  onClick={() => {
                    onLogout();
                    toggleMenu();
                  }}
                  className="block w-full px-4 py-3 text-center rounded-lg text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-all duration-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 