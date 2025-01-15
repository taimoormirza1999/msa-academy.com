import React from 'react';

const BannerTextHeading = ({ heading, paragraph }) => {
  return (
    <div >
      
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 font-ebold-ccm">{heading}</h2>
        <p className="text-sm lg:text-lg xl:text-xl 2xl:text-xl mb-4 text-ferozi uppercase font-regular-ccm ">
        {paragraph}
        </p>
    </div>
  );
};

export default BannerTextHeading;
