import React from 'react';
import DrawingImage from '../assets/drawing_banner.png'; 
import Button from './utils/Button';

const Drawing = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-0 md:mt-28 mb-10"
     id="drawing-course"
    >
         <div className="relative h-auto mx-auto md:w-95" >
         <img 
      src={DrawingImage} 
      alt="Banner" 
      className="w-full h-[48vh] sm:h-[60vh] md:h-[90vh] lg:h-full object-cover md:object-contain"
    />
         </div>
      <div className="bg-black/50 shadow-xl md:bg-transparent rounded md:rounded-none mx-auto md:absolute top-28 left-32 p-8  text-white w-95 md:w-1/2 flex flex-col justify-center w-">
        <h2 className="text-4xl font-bold mb-4">DRAWING COURSES</h2>
        <p className="text-base mb-4 text-ferozi">
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
