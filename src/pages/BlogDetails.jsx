import React, { Suspense, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import BackgroundImage from "../assets/background.jpg";
import Loader from "../components/Loader";
import ScrollAnimation from "../components/utils/ScrollAnimation";
import LoaderWrapper from "../components/utils/LoaderWrapper";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const colors = ["bg-blue-500", "bg-pink-500", "bg-indigo-500"];
  const myshadows = ["shadow-blue-500", "shadow-pink-50", "shadow-indigo-50"];

  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [recentblogData, setRecentBlogData] = useState(null);
  const fetchBlogs = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ADMIN_APIS}blogs/${id}`
    );
    setBlogData(response.data);
  };
  const fetchRecentBlogs = async (currentBlogId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_ADMIN_APIS}blogs/recent-blogs`,
      {
        params: {
          // limit: 7,
        },
      }
    );
    const filteredBlogs = response.data.filter(
      (blog) => blog._id !== currentBlogId
    );
    // Limit to 6 blogs after filtering
    setRecentBlogData(filteredBlogs);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchBlogs();
    fetchRecentBlogs(id);
  }, [id]);
  return (
    <div
      className="min-h-screen mx-0 bg-cover bg-center mt-28  "
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Navigation />

      <div className="container w-[92%] xl:w-[80%] mx-auto lg:p-6 my-18 max-w-[1920px] ">
        {/* Main Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Blog Content Area */}
          <div className="shadow-2xl shadow-pink200/40 lg:col-span-2 bg-black/35 bg-opacity-90 px-2 lg:p-6 rounded-2xl  relative">
            {/* Blog Top Image */}
            <img
              src={blogData?.coverImage}
              alt="Blog Cover"
              className="w-full border-2 border-pink200 shadow-2xl shadow-pink200/40 h-[23rem] lg:h-[30rem] object-cover rounded-2xl mb-4 bg-gradient-to-t from-black via-black/50 to-transparent"
            />
            <div className="px-2 lg:px-0">
              {/* Blog Title */}
              <div className=" items-center mt-6 lg:mt-10 z-20 w-full ">
                <h1 className="text-2xl lg:text-4xl font-bold text-pink200  font-impact-regular mb-1 ">
                  {blogData?.title}
                </h1>
                <span className="justify-end text-xs pe-2 mt-10 text-white font-medium-kgpr text-right">
                  {new Date(blogData?.postedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <div className="mb-0 mt-3 lg:my-4 flex flex-wrap gap-1.5">
                  {blogData?.categories?.slice(0, 3).map((category, index) => (
                    <span
                      key={index}
                      className={`text-white  font-medium py-1.5  text-[0.65rem] md:text-xs px-5 lg:px-7 rounded-full font-impact-regular bg-opacity-40 shadow-pink200 shadow-2xl  ${
                        colors[index % colors.length]
                      } `}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blog Description */}
              <div
                className="text-gray-100 leading-relaxed  bg-opacity-90 px-3 p-3 rounded mt-3 lg:mt-5 font-medium-kgpr  text-sm"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blogData?.content),
                }}
              ></div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="shadow-2xl shadow-pink200/40 bg-black/35 bg-opacity-90 p-6 rounded-2xl ">
            {/* Recent Blogs */}
            <h2 className="text-xl lg:text-2xl font-semibold text-pink200 border-b-2 border-pink200 pb-2.5 mb-5 font-medium-ccm ">
              Recent Blogs
            </h2>{" "}
            <ul className="space-y-4">
              {" "}
              {recentblogData?.reverse().map((recentblogItem, index) => (
                <Link
                  to={`/blog/${recentblogItem._id}`}
                  key={index}
                  className="flex items-center space-x-4 shadow-xl  hover:scale-[1.03] transition-transform duration-300 shadow-pink200/25 rounded-[13px] p-2.5 mb-5 border-[1.5px] border-pink200"
                >
                  {" "}
                  <img
                    src={recentblogItem?.coverImage}
                    alt={`Blog ${index + 1} thumbnail`}
                    className="border-[1.5px]  border-pink200/70 shadow shadow-pink200/30 w-20 h-20 object-cover rounded-md"
                  />{" "}
                  <a
                    href="#"
                    className="w-full text-white text-base font-medium-kgpr"
                    style={{ fontWeight: "900" }}
                  >
                    {" "}
                    <p className="w-full text-xs lg:text-sm font-bold lg:pb-2 ">{recentblogItem?.title}</p>
                    <div className="text-right text-[0.55rem] lg:text-[0.69rem] w-full pe-2 mt-3">
                      {new Date(recentblogItem?.postedDate).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                  </a>{" "}
                </Link>
              ))}{" "}
            </ul>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <ScrollAnimation>
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
