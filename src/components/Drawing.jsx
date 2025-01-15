import React from 'react';
import DrawingImage from '../assets/drawing_banner.png'; 
import Button from './utils/Button';

const Drawing = () => {
  return (
    <div
      className="relative w-full md:w-99 h-auto bg-cover bg-center mt-0 md:mt-28 mb-10 md:mb-20 lg:mb-10 max-w-[1920px]"
     id="drawing-course"
    >
         <div className="relative h-auto mx-auto md:w-95 2xl:w-85"  >
         <img 
      src={DrawingImage} 
      alt="Banner" 
      className="w-full h-[48vh] sm:h-[60vh] md:h-full lg:h-full 2xl:h-3/4 object-cover md:object-contain"
    />
         </div>
      <div className="bg-black/50 lg:bg-transparent rounded-xl shadow-xl shadow-pink200/30 lg:shadow-none lg:rounded-none mx-auto lg:absolute top-28 md:top-32 2xl:top-48 left-32 2xl:left-64 p-8  text-white w-95 md:w-85 lg:w-1/2 flex flex-col justify-center md:mt-5">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">DRAWING COURSES</h2>
        <p className="text-sm lg:text-lg mb-4 text-ferozi uppercase">
        WE BELIEVE EVERYONE IS AN ARTIST, 
JOIN US TO UNLEASH THE ARTISTIC 
TALENT WHITHIN YOU!
        </p>
        <div className='mt-2 mb-3'>
      <Button textSize="text-sm"/>
      </div>

      </div>
    </div>
  );
};

export default Drawing;
