import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion'
const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-lg py-2.5 md:py-3">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-center ">
        {/* Logo */}
        <img 
          src={logo} 
          className="w-32 h-auto px-3 md:border-r-3 border-gray636 shadow-xl shadow-pink200/30" 
          alt="Logo" 
        
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white px-3 pl-5">
          <li>
            <Link
              to="enrollment"
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primary transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
            >
              ENROLL
            </Link>
          </li>
          <li>
            <Link
              to="drawing-course"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
            >
              DRAWING COURSE
            </Link>
          </li>
          <li>
            <Link
              to="animation-course"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
            >
              ANIMATION COURSE
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center shadow-lg shadow-pink200/30">
        <button
  className="text-white text-2xl focus:outline-none"
  onClick={toggleMobileMenu}
>
  {isMobileMenuOpen ? (
    <motion.div
      initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <FiX className="text-pink200 text-4xl" />
    </motion.div>
  ) : (
    <motion.div
      initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <FiMenu className="text-white text-4xl shadow-xl shadow-pink200/35" />
    </motion.div>
  )}
</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-black md:hidden">
          <ul className="flex flex-col items-center space-y-4 text-white py-4">
            <li>
              <Link
                to="enrollment"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary"
                onClick={toggleMobileMenu} 
              >
                ENROLL
              </Link>
            </li>
            <li>
              <Link
                to="drawing-course"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary"
                onClick={toggleMobileMenu} 
              >
                DRAWING COURSE
              </Link>
            </li>
            <li>
              <Link
                to="animation-course"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary"
                onClick={toggleMobileMenu} 
              >
                ANIMATION COURSE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
