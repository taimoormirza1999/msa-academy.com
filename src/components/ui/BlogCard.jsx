import React from 'react';
import { Link } from "react-router-dom";

export default function BlogCard({blogItem}) {
  const colors = ['bg-blue-500', 'bg-pink-500', 'bg-indigo-500'];
  const shadows = ['shadow-blue-500', 'shadow-pink-500', 'shadow-indigo-500'];

  return (
    <div className="relative  text-white  rounded-lg p-3 ">
      {/* Image */}
      <Link to={`/blog/${blogItem._id}`} className="relative cursor-pointer">
        <img
          src={blogItem?.coverImage} // Replace with your image URL
          alt="Blog Post"
          className="w-full h-64 object-cover rounded-lg"
        />
        
        {/* Title & Read More Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/50 to-transparent rounded-lg shadow-xl shadow-pink200/15">
          <h3 className="text-xl lg:text-xl font-bold text-white font-medium-fgm mb-3 ">
            {blogItem.title}
          </h3>
       
         <div className='mb-3'>
         {blogItem.categories?.slice(0, 3).map((category, index) => (
              <span
                key={index}
                className={`text-white font-medium py-1 text-xs px-4 rounded-full font-impact-regular bg-opacity-45 shadow-2xl ${colors[index % colors.length]} ${shadows[index % shadows.length]}`}
              >
                {category}
              </span>
            ))}
         </div>
          <a href="/blog" className="text-pink200 mt-2 inline-block">
            Read More
          </a>
        </div>
      </Link>
      
      {/* Subscription Form */}
     
    </div>
  );
}
