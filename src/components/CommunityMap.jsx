import React from 'react';
import CommunityMapImage from '../assets/community_map.png'; // Replace with your actual image path

const CommunityMap = () => {
  return (
    <div
      className="relative mb-5 mt-5 lg:mb-0 lg:mt-0 w-95 h-auto bg-cover bg-center my-0 2xl:w-85 mx-auto max-w-[1920px]"
     
    >
         <div className="relative h-auto mx-auto w-full md:w-85 " >
         <img 
      src={CommunityMapImage} 
      alt="Banner" 
      className="w-full h-auto sm:h-[60vh] md:h-80 lg:h-auto object-contain md:object-contain"
    />
         </div>
    
    </div>
  );
};

export default CommunityMap;
