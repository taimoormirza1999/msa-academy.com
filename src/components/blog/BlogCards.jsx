import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../ui/BlogCard";
import axios from "axios";
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-5 shadow-pink200/40 top-1/2 -translate-y-1/2 z-10 g-black/55 border-[1.5px] border-pink200 text-pink200 p-3 rounded-full shadow-xl"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-5 shadow-pink200/40 top-1/2 -translate-y-1/2 z-10 bg-black/55 border-[1.5px] border-pink200 text-pink200 p-3 rounded-full shadow-xl"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

function MultipleItems() {
  const [blogData, setBlogData] = useState(null);

  const fetchBlogs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_ADMIN_APIS}blogs`);
    setBlogData(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const settings = {
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 5000,
    appendDots: dots => (
      <div
     
    
      >
        <ul  > {dots} </ul>
      </div>
    ),
    // dotsClass: "slick-dots slick-thumb",
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-8 mb-8 lg:mb-0 lg:mt-28">
      <Slider {...settings}>
        {blogData?.map((blogItem, key) => (
          <BlogCard blogItem={blogItem} key={key} />
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
