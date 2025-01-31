import React, { Suspense, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import BackgroundImage from "../assets/background.jpg";
import Loader from '../components/Loader';
import ScrollAnimation from '../components/utils/ScrollAnimation';
import LoaderWrapper from '../components/utils/LoaderWrapper';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const BlogDetail = () => {
    const { id } = useParams(); 
    const [blogData, setBlogData] = useState(null);
    const fetchBlogs = async () => {
      const response = await axios.get(`http://localhost:5002/blogs/${id}`);
      setBlogData(response.data);
  };
    useEffect(() => { 
        fetchBlogs(); },[]);
  return (
    <div
    className="min-h-screen mx-0 bg-cover bg-center mt-28  "
    style={{ backgroundImage: `url(${BackgroundImage})` }}
  >
    <Navigation />
      {/* NavBar Component */}
      {/* <NavBar /> */}

      <div className="container w-[90%] mx-auto p-6 my-18 max-w-[1920px] ">
        {/* Main Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Blog Content Area */}
          <div className="lg:col-span-2 bg-black/40 bg-opacity-90 p-6 rounded-2xl shadow-xl relative">
            {/* Blog Top Image */}
            <img
              src={blogData?.coverImage}
              alt="Blog Cover"
              className="w-full h-[30rem] object-cover rounded-2xl mb-4 bg-gradient-to-t from-black via-black/50 to-transparent"
            />

            {/* Blog Title */}
            <h1 className="text-4xl font-bold text-pink200 mb-4 font-impact-regular absolute bottom-34 z-20 ">{blogData?.title}</h1>

            {/* Blog Description */}
            <p className="text-gray-200 text-lg leading-relaxed bg-black/30 bg-opacity-90 px-3 p-3 rounded mt-20 ">
             {blogData?.content}
            </p>
          </div>

          {/* Sidebar Area */}
          <div className="bg-black/50 bg-opacity-90 p-6 rounded-2xl shadow-xl">
            {/* Recent Blogs */}
            <h2 className="text-xl font-semibold text-pink200 mb-4">Recent Blogs</h2>

            <ul className="space-y-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white  hover:underline hover:text-blue-700"
                    >
                      Dummy Blog Title {index + 1}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
            <ScrollAnimation >
              <LoaderWrapper>
                <FAQ />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <LoaderWrapper>
            <Footer />
          </LoaderWrapper>
    </div>
  );
};

export default BlogDetail;
