import React from 'react';

const BannerTextHeading = ({ heading, paragraph, paragraphspecificwidth=false }) => {
  return (
    <div >
      
      <h2 className="text-2xl lg:text-[4.2rem] lg:leading-[50pt] font-bold mb-[10pt] font-ebold-ccm">{heading}</h2>
        <p className={`${paragraphspecificwidth&&'w-[63%]'} text-[0.93rem] md:text-[1.1rem]  lg:text-[1.4rem] mb-4 text-ferozi uppercase font-regular-ccm `}>
        {paragraph}
        </p>
    </div>
  );
};

export default BannerTextHeading;
