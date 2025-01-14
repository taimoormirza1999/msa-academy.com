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

  const packages = [
    { name: 'Basic Plan', description: 'Basic plan with essential features.', price: 999 },
    { name: 'Standard Plan', description: 'Standard plan with more features.', price: 1999 },
    { name: 'Premium Plan', description: 'Premium plan with all features.', price: 2999 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  rounded-lg -mt-10 ">
      <h1 className="text-4xl font-bold text-white mb-8">Choose Your Plan</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 w-80 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{pkg.name}</h2>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <p className="text-lg font-bold text-gray-800">
              Price: <span className="text-blue-600">AED{(pkg.price / 100).toFixed(2)}</span> per month
            </p>
            <button
              onClick={() => handleCheckout(pkg)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
