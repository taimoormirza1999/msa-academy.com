import React from 'react';
import YourPathImage from '../assets/path_banner.png'; // Replace with your actual image path

const YourPath = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-16 mx-auto md:w-95"
     
    >
         <div className="relative w-full h-auto">
         <img 
      src={YourPathImage} 
      alt="Banner" 
      className="w-full h-[55vh] sm:h-[60vh] md:h-[90vh] lg:h-full object-cover md:object-contain object-[60%_30%] -z-10 "
    />
         </div>
      <div className="bg-black/60 z-50 md:z-0 md:bg-transparent rounded md:rounded-none mx-auto md:absolute  md:top-10 md:left-16 p-8 text-white w-95 md:w-1/2 flex flex-col justify-center -mt-40 mb-28 md:mt-0 md:mb-0">
        <h2 className="text-4xl font-bold mb-4 ">FIND YOUR PATH AND LEARN ONLINE</h2>
        <p className="text-lg mb-4 text-ferozi ">
          Our courses are designed for students of all skill levels. Explore and learn from scratch with our easy-to-follow videos, allowing you to progress at your own pace.
        </p>
      </div>
    </div>
  );
};

export default YourPath;
