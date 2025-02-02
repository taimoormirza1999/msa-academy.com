import React from 'react';
import DrawingImage from '../assets/drawing_banner.png'; 
import Button from './utils/Button';
import BannerTextHeading from './utils/BannerTextHeading';
import { motion } from "framer-motion"

const Drawing = () => {
  return (
    <motion.div 
    transition={{ type: "spring", stiffness: 500, damping: 50 }} className="relative w-full md:w-99 h-auto bg-cover bg-center mt-0 md:mt-28 mb-10 md:mb-20 lg:mb-10  mx-auto max-w-[1920px]"
     id="drawing-course"
    >
         <div className="relative h-auto mx-auto  w-99 md:w-98 lg:w-100 "  >
         <img 
      src={DrawingImage} 
      alt="Banner" 
      className="w-full h-[48vh] sm:h-[60vh] md:h-full lg:h-full 2xl:h-3/4 object-cover md:object-contain"
    />
         </div>
      <div className="bg-black/50 lg:bg-transparent rounded-xl shadow-xl shadow-pink200/30 lg:shadow-none lg:rounded-none mx-auto lg:absolute top-28 md:top-32 2xl:top-64 left-32 2xl:left-48 p-8  text-white w-95 md:w-85 lg:w-1/2 2xl:w-[37%] flex flex-col justify-center md:mt-5">
      
        <BannerTextHeading
        heading="DRAWING COURSES"
        paragraph="WE BELIEVE EVERYONE IS AN ARTIST, 
JOIN US TO UNLEASH THE ARTISTIC 
TALENT WHITHIN YOU!"
      />
        <div className='mt-2 mb-3 lg:mt-[30pt] animate-bounceSlow'>
      <Button textSize="text-sm"/>
      </div>

      </div>
    </motion.div>
  );
};

export default Drawing;
