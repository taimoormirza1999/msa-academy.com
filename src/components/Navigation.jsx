import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'; 
const Navigation = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-lg py-3">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex  items-center justify-center mx-auto">
         

        <img 
  src={logo} 
  className="w-32 h-auto px-3" 
  alt="Logo" 
  style={{ borderRight: '3px solid #636363' }} 
/>
          <ul className="flex space-x-6 text-white px-3 pl-5">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary"
              >
                ENROLL
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary"
              >
                DRAWING COURSE
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary"
              >
                ANIMATION COURSE
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
