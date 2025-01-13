import React from 'react';
import YourPathImage from '../assets/pathbanner.png'; // Replace with your actual image path

const YourPath = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-16"
     
    >
         <div className="relative w-full h-auto">
         <img 
      src={YourPathImage} 
      alt="Banner" 
      className="w-full h-auto object-contain"
    />
         </div>
      <div className="absolute top-10 left-10 p-8  text-white w-1/2 flex flex-col justify-center w-">
        <h2 className="text-4xl font-bold mb-4">FIND YOUR PATH AND LEARN ONLINE</h2>
        <p className="text-lg mb-4 text-ferozi">
          Our courses are designed for students of all skill levels. Explore and learn from scratch with our easy-to-follow videos, allowing you to progress at your own pace.
        </p>
      </div>
    </div>
  );
};

export default YourPath;
