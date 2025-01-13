import React, { useState, useEffect } from 'react';

const EnrollmentBanner = () => {
  const [timeLeft, setTimeLeft] = useState({});
  
  // Set the enrollment end time (2 months, 4 days from now)
  const endTime = new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000) + (4 * 24 * 60 * 60 * 1000); // 2 months + 4 days in milliseconds

  useEffect(() => {
    // Update the timer every second
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({});
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white text-center py-5 ">
      <div className='flex justify-center items-center'>
      <h1 className="text-4xl font-impact-regular">ENROLLMENT ENDS IN</h1>
      <div className="text-4xl  ml-2 font-impact-regular">
        <span>{timeLeft.days} Days </span>
        <span>{timeLeft.hours} Hours </span>
        <span>{timeLeft.minutes} Minutes </span>
        <span>{timeLeft.seconds} Seconds</span>
      </div>
      </div>
      <p className="mt-3 text-xl ">(LIMITED TO 1,000 STUDENTS ONLY)</p>
    </div>
  );
};

export default EnrollmentBanner;
