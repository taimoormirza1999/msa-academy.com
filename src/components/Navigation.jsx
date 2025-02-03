import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      // Navigate to the homepage first, then scroll after loading
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Delay for route change
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-lg py-2.5 md:py-3">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-center">
        <RouterLink to="/" className="cursor-pointer">
          <img src={logo} className="w-32 h-auto px-3 md:border-r-2 border-gray636 shadow-xl" alt="Logo" />
        </RouterLink>

        <ul className="hidden md:flex space-x-6 text-white px-3 pl-5">
          <li className="animate-bounce">
            <span onClick={() => handleScroll('enroll-checkout')} className="animate-textGlow cursor-pointer hover:text-pink200">
              ENROLL
            </span>
          </li>
          <li>
            <span onClick={() => handleScroll('drawing-course')} className="cursor-pointer hover:text-pink200">
              DRAWING COURSE
            </span>
          </li>
          <li>
            <span onClick={() => handleScroll('animation-course')} className="cursor-pointer hover:text-pink200">
              ANIMATION COURSE
            </span>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button className="text-white text-2xl focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX className="text-pink200 text-4xl" /> : <FiMenu className="text-white text-4xl" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-black md:hidden">
          <ul className="flex flex-col items-center space-y-4 text-white py-4">
            <li onClick={() => handleScroll('enroll-checkout')}>ENROLL</li>
            <li onClick={() => handleScroll('drawing-course')}>DRAWING COURSE</li>
            <li onClick={() => handleScroll('animation-course')}>ANIMATION COURSE</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
