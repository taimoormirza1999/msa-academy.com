import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const handleCheckout = async (packageDetails) => {
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
      // Redirect to Stripe Checkout
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
      price: 500,
      includes: [
        'ACCESS TO ALL DRAWING COURSES',
        'CHANCE TO BE FEATURED IN MSA YOUTUBE CHANNEL VIDEOS',
        'ACCESS TO ALL ANIMATION COURSES',
        'ACCESS TO DOWNLOAD ALL HIGH-QUALITY WALLPAPERS, POSTERS, & EMOJIS',
        'DISCOUNT ON ALL MSA MERCHANDISE',
        'FEEDBACK DIRECTLY FROM MENTORS',
      ],
    },
    {
      name: 'Premium',
      description: 'Standard plan with more features.',
      price: 200,
      includes: [
        'Access to all drawing courses',
        'Access to all animation courses',
        'Access to download all high-quality wallpapers, posters, & emojis',
        'Discount on all MSA merchandise',
        'Feedback directly from mentors',
        'Chance to be featured in MSA YouTube channel videos',
      ],
    },
  ];
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-lg my-14 md:-my-32 lg:-my-20  max-w-[1920px]">
      <div className="grid gap-8 md:grid-cols-2">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`bg-black/40 rounded-primary border-2 ${index==0?'border-purple shadow-purple/35 hover:shadow-purple/75': 'border-pink200 shadow-pink200/35 hover:shadow-pink200/75' } shadow-xl p-6 px-10 w-96 hover:shadow-2xl transition duration-300 text-center cursor-pointer`}
           
          >
            <h2 className={`text-base font-medium uppercase ${index==0?'text-purple': 'text-pink200'} mb-4 font-regular-ccm`}>{pkg.name}</h2>
           
             <span className="text-white text-5xl font-bold">${(pkg.price)}</span>
            
            <p className="text-white mb-4 font-semibold text-xs mt-3">PER MONTH</p>
            {/* <p className="text-whites mb-4 font-regular-ccm text-sm">{pkg.description}</p> */}
            <ul className="space-y-2">
              {pkg.includes.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className={`w-4 h-4 flex items-center justify-center rounded-full  ${index==0?'text-purple': 'text-pink200'} mr-2`}>
                    ✓
                  </span>
                  <span className="text-white text-sm uppercase my-3">{item}</span>
                </li>
              ))}
              </ul>
           
            <button
              onClick={() => handleCheckout(pkg)}
              className={` mt-10 mb-3 px-12 border-2 ${index==0?'border-purple shadow-purple/40 hover:shadow-purple': 'border-pink200 hover:shadow-pink200 shadow-pink200/40' }  text-white py-2 px-4 rounded-lg shadow-xl   hover:${index==0?'bg-purple': 'bg-pink200' } hover:shadow-2xl  transition duration-300 uppercase`}
            >
              Enroll NoW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
