import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


export default function BlogCard({blogItem}) {
  const colors = ['bg-blue-500', 'bg-pink-500', 'bg-indigo-500'];
  const shadows = ['shadow-blue-500', 'shadow-pink-500', 'shadow-indigo-500'];

  return (
    <motion.div  whileHover={{scale: 1.02, transition: {
      duration: 0.4,
      ease: "easeInOut",
      // delay:2,
    },}} className="relative text-white m-1 lg:m-2 h-[50vh]  border-2 border-pink200 rounded-[3rem]" >
      {/* Image */}
      <Link to={`/blog/${blogItem._id}`} className="relative cursor-pointer  ">
        <img
       
          src={blogItem?.coverImage} 
          alt="Blog Post"
          className="w-full object-cover rounded-[3rem] h-[50vh]"
        /> 
        {/* Title & Read More Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[50vh]  rounded-[3rem] p-4 bg-gradient-to-t from-black via-black/10 to-black/20 
       shadow-lg shadow-pink200/15 flex items-end ">
          <div className="lg:mb-8 pl-2 lg:pl-0 mb-2">
          <h3 className="text-lg lg:text-2xl font-bold text-white font-medium-fgm mb-2 lg:mb-4 ">
            {blogItem.title}
          </h3>
       
         <div className='mb-3 flex flex-wrap gap-1.5'>
         {blogItem.categories?.slice(0,3).map((category, index) => (
              <span
                key={index}
                className={`text-white font-medium py-1 text-xs lg:text-sm px-4 rounded-full font-impact-regular bg-opacity-45 shadow-2xl ${colors[index % colors.length]} ${shadows[index % shadows.length]}`}
              >
                {category}
              </span>
            ))}
         </div>
          <a href={`/blog/${blogItem._id}`} className="text-gray-50 lg:mt-2 inline-block border-[1.2px] shadow-lg shadow-pink200/35 border-pink200 px-4 p-1 rounded-full lg:text-sm text-xs">
            Read More
          </a>
          </div>
        </div>
      </Link>
           
    </motion.div>
  );
}
