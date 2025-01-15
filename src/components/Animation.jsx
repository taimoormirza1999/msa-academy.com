import React from 'react';
import AnimationImage from '../assets/animation_banner.png'; // Replace with your actual image path
import VideoSection from './VideoSections';
import Button from './utils/Button';

const Animation = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center -mt-10 md:-mt-36"
     id='animation-course'
    >
         <div className="relative h-auto w-99 md:w-97" >
         <img 
      src={AnimationImage} 
      alt="Banner" 
     className="w-full h-[38vh] sm:h-[60vh] md:h-[80vh] lg:h-full  object-cover object-[20%_30%]"
    />
         </div>
      <div className="bg-black/40 md:bg-transparent rounded md:rounded-none mx-auto md:absolute top-20 right-10 p-8  text-white w-95 md:w-1/2 flex flex-col justify-end  md:justify-center ">
        <h2 className="text-4xl font-bold mb-4">ANIMATION COURSES</h2>
        <p className="text-base mb-4 text-ferozi">
        DO YOU WANT TO HAVE THE ABILITY 
TO MAKE THINGS AND CHARACTERS 
MOVE? YOU’RE IN THE RIGHT PLACE!
        </p>
      <div className='mt-2 mb-3'>
      <Button textSize="text-sm"/>
      </div>
        <VideoSection/>
      </div>
    </div>
  );
};

export default Animation;
