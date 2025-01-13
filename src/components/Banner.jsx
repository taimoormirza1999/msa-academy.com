import React from 'react';
import BannerImage from '../assets/bannerbg.png';

const Banner = () => {
  return (
    <div className="relative w-full h-auto mt-10">
    <img 
      src={BannerImage} 
      alt="Banner" 
      className="w-full h-auto object-contain"
    />
    <div className="absolute top-28 right-16 z-30" style={{top: 'calc(100% - 35%)'}}>
      <button className="bg-red text-white py-2 text-lg font-medium-ccmpx-6 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        ENROLL NOW!
      </button>
    </div>
  </div>
  );
}

export default Banner;
