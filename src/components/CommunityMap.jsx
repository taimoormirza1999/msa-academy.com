import React from 'react';
import CommunityMapImage from '../assets/community_map.png'; // Replace with your actual image path

const CommunityMap = () => {
  return (
    <div
      className="relative w-full h-auto bg-cover bg-center mt-8 mb-8 md:mt-18 md:mb-0"
     
    >
         <div className="relative h-auto mx-auto  w-full md:w-85 " >
         <img 
      src={CommunityMapImage} 
      alt="Banner" 
      className="w-full h-[29vh] sm:h-[60vh] md:h-[80vh] lg:h-auto object-cover "
    />
         </div>
    
    </div>
  );
};

export default CommunityMap;
