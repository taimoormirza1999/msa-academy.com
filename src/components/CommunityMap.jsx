import React from 'react';
import CommunityMapImage from '../assets/community_map.png'; // Replace with your actual image path

const CommunityMap = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-5 md:mt-14 lg:mt-0 2xl:mt-0  mb-5 md:mb-8 lg:mb-0 2xl:w-85 mx-auto max-w-[1920px]"
     
    >
         <div className="relative h-auto mx-auto w-full md:w-85 " >
         <img 
      src={CommunityMapImage} 
      alt="Banner" 
      className="w-full h-[29vh] sm:h-[60vh] md:h-80 lg:h-auto object-cover md:object-contain"
    />
         </div>
    
    </div>
  );
};

export default CommunityMap;
