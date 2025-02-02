import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom';
const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-lg py-2.5 md:py-3">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-center ">
        {/* Logo */}
         <RouterLink to="/"
              smooth={true}
              duration={500}
              className=" cursor-pointer "
            >
        <img 
          src={logo} 
          className="w-32 h-auto px-3 md:border-r-2 border-gray636 shadow-xl " 
          alt="Logo" 
        
        />
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white px-3 pl-5">
          <li className='animate-bounce'>
           <div className=''>
           <Link
              to="enroll-checkout"
              smooth={true}
              duration={500}
              className=" font-regular-ccm cursor-pointer hover:text-pink200 transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
            ><span className=" font-regular-ccm cursor-pointer animate-textGlow hover:text-pink200">
              ENROLL
            </span>

            </Link>
           </div>
          </li>
          <li>
            <Link
              to="drawing-course"
              smooth={true}
              duration={500}
              className= " font-regular-ccm cursor-pointer hover:text-pink200 transform transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl"
            >
              DRAWING COURSE
            </Link>
          </li>
          <li>
            <Link
              to="animation-course"
              smooth={true}
              duration={500}
              className= "font-regular-ccm cursor-pointer hover:text-pink200 transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
            >
              ANIMATION COURSE
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center shadow-xl shadow-pink200/45 ">
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
      <FiMenu className="text-white text-4xl " />
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
                to="enroll-checkout"
                smooth={true}
                duration={500}
                className= "font-regular-ccm cursor-pointer hover:text-pink200"
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
                className= "font-regular-ccm cursor-pointer hover:text-pink200"
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
                className= "font-regular-ccm cursor-pointer hover:text-pink200"
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
