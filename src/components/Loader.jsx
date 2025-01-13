import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-16 h-16">
        <div
          className="absolute border-4 border-[#ee00a7e4] border-t-transparent rounded-full animate-spin"
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
