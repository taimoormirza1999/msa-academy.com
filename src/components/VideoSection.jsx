import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'
const VideoSection = ({videoUrl, imageUrl}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [videoUrl, setVideoUrl] = useState(videoUrl);

  const handleVideoClick = () => {
    // setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setVideoUrl('');
  };

  return (
    <div>
      <div
        className="relative bg-[#bdbdbd] h-52 md:h-48 flex justify-center items-center text-center rounded-2xl cursor-pointer"
        onClick={() => handleVideoClick()}
      >
        <img
    src= {imageUrl}
    alt="Video Thumbnail"
    className="w-full h-full object-cover rounded-xl shadow-xl shadow-pink200/45 border-2 border-[#F33C64] "
  />
  <div className="absolute rounded-full p-2.5 bg-black bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <FaPlay className="text-white  p-2 w-12 h-12 shadow-2xl" />
  </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-40 inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="border-2 border-pink200 rounded relative">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold"
              onClick={closeModal}
            >
              X
            </button>
            <iframe
              className=" h-72 rounded bg-black w-80vw md:w-80vw md:h-40vw" 
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              // style={{height:'50vh'}}
              title="YouTube video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
