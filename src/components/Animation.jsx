import React from 'react';
import AnimationImage from '../assets/animation_banner.png'; // Replace with your actual image path
import VideoSection from './VideoSections';
import Button from './utils/Button';
import BannerTextHeading from './utils/BannerTextHeading';

const Animation = () => {
  return (
    <div
      className="relative w-full md:w-99 h-auto bg-cover bg-center -mt-10 md:mb-10 lg:mb-60 xl:mb-10 lg:-mt-36 xl:-mt-56 lg:w-full 2xl:w-85 mx-auto max-w-[1920px]"
     id='animation-course'
    >
         <div className="relative h-auto w-99 md:w-97" >
         <img 
      src={AnimationImage} 
      alt="Banner" 
     className="w-full md:w-98 h-[38vh] sm:h-[60vh] md:h-full lg:h-full  object-cover object-[20%_30%]"
    />
         </div>
      <div className="bg-black/40 lg:bg-transparent rounded-xl shadow-xl shadow-pink200/30 lg:shadow-none lg:rounded-none mx-auto lg:absolute top-20 right-10 p-8 text-white w-95 md:w-85 lg:w-1/2 flex flex-col justify-end lg:justify-center md:mt-5 lg:me-5">
       
        <BannerTextHeading
        heading="ANIMATION COURSES"
        paragraph="DO YOU WANT TO HAVE THE ABILITY 
TO MAKE THINGS AND CHARACTERS 
MOVE? YOU’RE IN THE RIGHT PLACE!"
      />
      <div className='mt-2 mb-3'>
      <Button textSize="text-sm"/>
      </div>
        <VideoSection/>
      </div>
    </div>
  );
};

export default Animation;
