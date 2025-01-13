
import React from 'react';

const VideoSection = () => {
  return (
    <div className="container mx-auto  px-4">
     
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        {/* Video 1 */}
        <div className="bg-[#bdbdbd] h-48 flex justify-center items-center text-center rounded-2xl">
          <p className="text-xl text-gray-900 font-semibold">Video 1 Placeholder</p>
        </div>
        {/* Video 2 */}
        <div className="bg-[#bdbdbd] h-48 flex justify-center items-center text-center rounded-2xl">
          <p className="text-xl text-gray-900 font-semibold">Video 2 Placeholder</p>
        </div>
        {/* Video 3 */}
        <div className="bg-[#bdbdbd] h-48 flex justify-center items-center text-center rounded-2xl">
          <p className="text-xl text-gray-900 font-semibold">Video 3 Placeholder</p>
        </div>
        {/* Video 4 */}
        <div className="bg-[#bdbdbd] h-48 flex justify-center items-center text-center rounded-2xl">
          <p className="text-xl text-gray-900 font-semibold">Video 4 Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
