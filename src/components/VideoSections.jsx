
import React from 'react';
import VideoSection from './VideoSection';

const VideoSections = () => {
  return (
    <div className="container md:mx-auto px-0 md:px-4 2xl:me-auto lg:flex lg:justify-end lg:pe-10">
     
      <div className="grid grid-cols-2 md:grid-cols-2 mt-10 gap-3 md:gap-5 ">
        {/* Video 1 */}
        <div className=" h-52 md:h-48 flex justify-center items-center text-center rounded-2xl">
       <VideoSection videoUrl='https://www.youtube.com/embed/3n-mizhCajY?si=QmcPzeUmEdDD5BaH' imageUrl={"https://i.ytimg.com/vi/3n-mizhCajY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCAkrpLTPqV8b4w4ny6WMK-Xffn4w" }/>
        </div>
        {/* Video 2 */}
        <div className=" h-52 md:h-48 flex justify-center items-center text-center rounded-2xl">
                 <VideoSection videoUrl='https://www.youtube.com/embed/NW-RDESrCKU?si=jcf8IJ6KM0MfMBBy' imageUrl={"https://i.ytimg.com/vi/NW-RDESrCKU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC-gbxPv8AwhVdsqvuFOdw7kqvj9w"}/>

        </div>
        {/* Video 3 */}
        <div className=" h-52 md:h-48 flex justify-center items-center text-center rounded-2xl">
                 <VideoSection videoUrl='https://www.youtube.com/embed/S4qg3_sBIo8?si=ReCbvZb4258TNhkc'imageUrl={"https://i.ytimg.com/vi/S4qg3_sBIo8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB7b6PIW_cMWm94m3h1wzxrDUTvEw"}/>

        </div>
        {/* Video 4 */}
        <div className=" h-52 md:h-48 flex justify-center items-center text-center rounded-2xl">
                 <VideoSection videoUrl='https://www.youtube.com/embed/apdV3r2ugrk?si=WnuV7Fmef8xtG9h9'imageUrl={"https://i.ytimg.com/vi/apdV3r2ugrk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAwrP5NNIApS7A38Z-lladEiAeo1g"} />

        </div>
      </div>
    </div>
  );
};

export default VideoSections;
