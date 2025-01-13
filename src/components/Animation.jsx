import React from 'react';
import AnimationImage from '../assets/Animationbg.png'; // Replace with your actual image path
import VideoSection from './VideoSection';

const Animation = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center -mt-36"
     
    >
         <div className="relative h-auto" style={{width:'97%'}}>
         <img 
      src={AnimationImage} 
      alt="Banner" 
      className="w-full h-auto object-contain"
    />
         </div>
      <div className="absolute top-20 right-10 p-8  text-white w-1/2 flex flex-col justify-center w-">
        <h2 className="text-5xl font-bold mb-4">ANIMATION COURSES</h2>
        <p className="text-xl mb-4 text-ferozi">
        DO YOU WANT TO HAVE THE ABILITY 
TO MAKE THINGS AND CHARACTERS 
MOVE? YOU’RE IN THE RIGHT PLACE!
        </p>
        <button
          className="mt-4 inline w-1/4 bg-red rounded-2xl text-white py-2 px-4  hover:bg-[#000000] transition duration-300"
        >
          Explore Now!
        </button>

        {/* Videos */}
        <VideoSection/>

      </div>
    </div>
  );
};

export default Animation;
