import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}subscribe2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        toast.success('Successfully subscribed!');
      } else {
        toast.error(data.error || 'Subscription failed.');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return showPopup ? (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#111] rounded-lg max-w-md w-full shadow-2xl shadow-pink200/20">
        <img
          src="https://mcusercontent.com/e1f1a4e7afa29f4705570bedf/images/e212dfae-95cb-0a7c-afb0-47948cedbf32.png"
          alt="Newsletter"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold text-white text-center font-medium-fgm">
                🎉Get exclusive updates and offers🎉
              </h2>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1 px-4 py-2 border text-gray-800 border-gray-300 rounded-lg shadow-sm focus:ring-pink200 focus:shadow focus:shadow-pink200/30"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-pink200 text-white font-semibold rounded-lg shadow hover:bg-pink200 shadow-2xl shadow-pink200/20 focus:outline-none focus:ring-2 focus:ring-pink200 font-medium-kgpr my-4"
              >
                Subscribe
              </button>
              <p className="text-sm text-center mt-4 mb-3 font-medium-kgpr">
                Join our community and be the first to know about new courses, exclusive offers, and more.
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center my-3">
            <h2 className="text-2xl font-bold text-white">Thank You!</h2>
            <p className="text-sm text-gray-50">Thanks for subscribing.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 py-2 px-4 bg-pink200 text-white font-semibold rounded-lg shadow hover:bg-pink200 focus:outline-none focus:ring-2 focus:ring-pink200"
            >
              Close
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  ) : null;
};

export default SignupForm;
