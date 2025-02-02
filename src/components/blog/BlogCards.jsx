import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../ui/BlogCard";
import axios from "axios";
function MultipleItems() {
    const [blogData, setBlogData] = useState(null);
    const fetchBlogs = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_ADMIN_APIS}blogs`);
      setBlogData(response.data);
  };
    useEffect(() => { fetchBlogs(); },[]);
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-container mt-8 mb-8 lg:mb-0 lg:mt-28 ">
      <Slider {...settings}>
      {blogData?.map((blogItem, key) => (
       <BlogCard blogItem={blogItem} key={key} />
       ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
