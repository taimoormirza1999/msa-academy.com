import React from 'react';
import BannerImage from '../assets/hero_banner.png';
import msaText from '../assets/msa_text.png';

import Button from './utils/Button';

const Banner = () => {
  return (
    <div className="relative  w-full 2xl:w-85 h-auto mt-20 md:mt-20 mx-auto md:w-97 mb-16 md:mb-0 lg:mb-0 xl:mb-0 max-w-[1920px]" >
   <img 
  src={BannerImage} 
  alt="Banner" 
  className="w-full mx-auto w-90 lg:w-97 h-[47vh] sm:h-[60vh] h-[45vh] lg:h-[80vh] lg:h-auto object-cover object-[25%_30%] rounded-lg"
/>

    <div className="absolute top-10 md:right-16 lg:right-28 md:left-auto left-0 right-0 z-30 mx-auto w-max" style={{top: 'calc(100% - 35%)'}}>
   <img 
  src={msaText} 
  alt="MSAAcademy-text" 
  className="-mt-7 -ml-1 2xl: w-40 h-auto shadow-2xl object-contain mb-3 md:hidden shadow-pink200/65"
/>
<div className='animate-bounce'>
      <Button isRounded={false}/>
</div>
    </div>
  </div>
  );
}

export default Banner;
