import React from 'react';
import DrawingImage from '../assets/Drawingbg.png'; // Replace with your actual image path

const Drawing = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-28"
     
    >
         <div className="relative h-auto mx-auto" style={{width:'94%'}}>
         <img 
      src={DrawingImage} 
      alt="Banner" 
      className="w-full h-auto object-contain"
    />
         </div>
      <div className="absolute top-28 left-32 p-8  text-white w-1/2 flex flex-col justify-center w-">
        <h2 className="text-5xl font-bold mb-4">DRAWING 
        COURSES</h2>
        <p className="text-xl mb-4 text-ferozi">
        WE BELIEVE EVERYONE IS AN ARTIST, 
JOIN US TO UNLEASH THE ARTISTIC 
TALENT WHITHIN YOU!
        </p>
        <button
          className="mt-4 inline w-1/4 bg-red rounded-2xl text-white py-2 px-4  hover:bg-[#000000] transition duration-300"
        >
          Explore Now!
        </button>

       

      </div>
    </div>
  );
};

export default Drawing;
