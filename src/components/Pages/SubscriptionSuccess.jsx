import React from 'react';

const SubscriptionSuccess = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-teal-500 via-purple-500 to-blue-600 flex items-center justify-center">
      <div className="relative w-full max-w-2xl p-8 bg-white shadow-lg rounded-xl transform scale-95 hover:scale-100 transition-all duration-300 ease-in-out">
        {/* Floating Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-teal-300 rounded-full animate-pulse opacity-20 blur-lg"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-300 rounded-full animate-pulse opacity-20 blur-lg"></div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-teal-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-6-8.28M12 3v9"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Success! 🎉</h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          Thank you for subscribing! Your payment was successful, and you are now part of our premium community.
        </p>

        {/* Details */}
        <div className="space-y-4 text-left">
          <div className="flex items-center">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-200 text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16.88 3.549l2.12 1.453a9 9 0 11-2.12-1.453z"
                />
              </svg>
            </span>
            <span className="ml-4 text-gray-700">Exclusive deals on premium products.</span>
          </div>
          <div className="flex items-center">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 3h4.5a2.25 2.25 0 012.25 2.25v1.5m-9 0V5.25A2.25 2.25 0 017.75 3H12m-6.75 0h9M9 20.25V18h6v2.25a2.25 2.25 0 002.25 2.25H20.25m-14.5 0h2.25A2.25 2.25 0 0110 20.25V18m0-4.5h4m-4 0H7.25A2.25 2.25 0 015 13.25V7.5m0-2.25V7.5a2.25 2.25 0 012.25 2.25V13.25M9 7.5V5.25a2.25 2.25 0 012.25-2.25H14.25a2.25 2.25 0 012.25 2.25V7.5"
                />
              </svg>
            </span>
            <span className="ml-4 text-gray-700">Priority customer support.</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-bold rounded-md shadow-lg hover:bg-teal-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
