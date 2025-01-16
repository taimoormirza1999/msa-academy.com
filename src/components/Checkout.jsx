import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (packageDetails) => {
    setLoading(true); 

    const body = {
        packageName: packageDetails.name,  
        description: packageDetails.description,
        priceAmount: packageDetails.price,
      };
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}create-checkout-session`, {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const session = await response.json();

    if (session.id) {
      setLoading(false);
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error during checkout redirection:', error);
      }
    } else {
      console.error('Failed to create session:', session.error);
    }
  };

//   const packages = [
//     { name: 'Basic Plan', description: 'Basic plan with essential features.', price: 999, includes: [] },
//     { name: 'Standard Plan', description: 'Standard plan with more features.', price: 1999, includes: []},
//   ];
  const packages = [
    {
      name: 'Basic',
      description: 'Basic plan with essential features.',
      price: 20,
      includes: [
       {text:'ACCESS TO ALL DRAWING COURSES', status:1},
        {text:'CHANCE TO BE FEATURED IN MSA YOUTUBE CHANNEL VIDEOS', status:1},
        {text:'ACCESS TO ALL ANIMATION COURSES', status:0},
        {text:'ACCESS TO DOWNLOAD ALL HIGH-QUALITY WALLPAPERS, POSTERS, & EMOJIS', status:0},
        {text:'DISCOUNT ON ALL MSA MERCHANDISE', status:0},
        {text:'FEEDBACK DIRECTLY FROM MENTORS', status:0},
      ],
    },
    {
      name: 'Premium',
      description: 'Standard plan with more features.',
      price: 30,
      includes: [
        {text:'Access to all drawing courses', status:1},
        {text:'Access to all animation courses', status:1},
        {text:'Access to download all high-quality wallpapers, posters, & emojis', status:1},
        {text:'Discount on all MSA merchandise', status:1},
        {text:'Feedback directly from mentors', status:1},
        {text:'Chance to be featured in MSA YouTube channel videos', status:1},
      ],
    },
  ];
  

  return (
    <div className="flex flex-col items-center mt-[50.5px] mb-[40.5px] lg:mb-0 lg:mt-[87.5px] justify-center w-85 mx-auto lg:w-1/2 2x:w-[75%]  max-w-[1920px]" id='enroll-checkout'>
      <div className="grid gap-8 md:grid-cols-2">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`bg-black/40 rounded-[3rem] border-2 ${index==0?'border-purple shadow-purple/35 hover:shadow-purple/75': 'border-pink200 shadow-pink200/35 hover:shadow-pink200/75'} shadow-xl p-6 px-7 lg:px-8  mx-auto hover:shadow-2xl transition duration-300 text-center cursor-pointer`}
           
          >
            <h2 className={`mt-[1rem] text-[13.32pt] text-base font-medium text-center uppercase ${index==0?'text-purple': 'text-pink200'} -mb-3 font-regular-ccm text-left`}>{pkg.name}</h2>
           
             <span className="text-white font-bold text-[4.1rem] font-medium-fgm">${(pkg.price)}</span>
            
            <p className="text-white font-semibold text-xs text-[0.6rem] -mt-2">PER MONTH</p>
            <ul className="mt-[2.5rem] lg:mt-[3.5rem] mb-[1.5rem] lg:mb-[2.1rem]">
              {pkg.includes.map((item, i) => (
                <li key={i} className="flex  ">
                  <span className={`w-4 h-4 flex items-center justify-center rounded-full  ${index==0?'text-purple': 'text-pink200'} mr-3 mt-2`}>
                    ✓
                  </span>
                  <span className={`${item.status == 1 ? 'text-white' : ' text-white text-opacity-20'} text-sm uppercase my-1 text-left text-[0.84rem]`}>{item.text}</span>

                </li>
              ))}
              </ul>
           
           <div className='animate-bounceSlow'>
           <button
              onClick={() => handleCheckout(pkg)}
              className={`animate-animate-glow  lg:text-[1.0956rem] mt-10 mb-3 px-12 border-[1.7px] ${index==0?'border-purple shadow-purple/40 hover:shadow-purple': 'border-pink200 hover:shadow-pink200 shadow-pink200/40' }  text-white pt-[12px] pb-[9px] px-[42.5px] rounded-[19px] shadow-xl   hover:${index==0?'bg-purple': 'bg-pink200' } hover:shadow-2xl  transition duration-300 uppercase`}
            >
             
              {loading ? (
        <span className="flex flex-row justify-center">
          <AiOutlineLoading3Quarters className="animate-spin mx-3" /> Processing..
        </span>
      ) : (
        'Enroll Now!'
      )}
            </button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
