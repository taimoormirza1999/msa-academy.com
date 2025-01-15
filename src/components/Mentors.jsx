import React from 'react';
import MentorsBanner from '../assets/Mentors_done.png'; // Replace with your actual image path

const Mentors = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-16 md:-mt-0 lg:mt-16 2xl:mt-28 md:w-95  lg:w-95 2xl:w-85 mx-auto max-w-[1920px]">
         <div className="relative h-auto mx-auto w-full md:w-95 lg:w-80">
         <img 
      src={MentorsBanner} 
      alt="Banner" 
      className="w-full  h-[34vh] sm:h-[60vh] md:h-full lg:h-[100vh] object-cover md:object-contain rounded-lg  md:object-center -me-20"/>
         </div>
      
    </div>
  );
};

export default Mentors;
