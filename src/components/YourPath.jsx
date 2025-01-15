import React from 'react';
import YourPathImage from '../assets/path_banner.png'; // Replace with your actual image path

const YourPath = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-16 md:-mt-10 lg:mt-16 mx-auto md:w-99 2xl:w-85 max-w-[1920px] "
     
    >
         <div className="relative w-full h-auto">
         <img 
      src={YourPathImage} 
      alt="Banner" 
      className="w-full md:w-98 h-[55vh] sm:h-[60vh] md:h-[90vh] lg:h-full object-cover md:object-contain object-[60%_30%] -z-10  mx-auto "
    />
         </div>
      <div className="bg-black/60 z-50 md:z-0 lg:bg-transparent rounded-xl shadow-xl shadow-pink200/30 lg:shadow-none lg:rounded-none mx-auto lg:absolute md:top-72 lg:top-10 2xl:top-20 lg:left-16 2xl:left-24 p-8 text-white w-95 lg:w-60 2xl:w-30vw flex flex-col justify-center -mt-32 mb-28 md:-mt-104 lg:-mt-0 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">FIND YOUR PATH AND LEARN ONLINE</h2>
        <p className="text-sm md:text-lg mb-4 text-ferozi uppercase ">
          Our courses are designed for students of all skill levels. Explore and learn from scratch with our easy-to-follow videos, allowing you to progress at your own pace.
        </p>
      </div>
    </div>
  );
};

export default YourPath;
