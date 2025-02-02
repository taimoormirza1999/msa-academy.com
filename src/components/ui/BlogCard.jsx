import { Link } from "react-router-dom";

export default function BlogCard({blogItem}) {
  const colors = ['bg-blue-500', 'bg-pink-500', 'bg-indigo-500'];
  const shadows = ['shadow-blue-500', 'shadow-pink-500', 'shadow-indigo-500'];

  return (
    <div className="relative text-white rounded-lg p-3 ">
      {/* Image */}
      <Link to={`/blog/${blogItem._id}`} className="relative cursor-pointer  ">
        <img
          src={blogItem?.coverImage} 
          alt="Blog Post"
          className="w-full h-64 object-cover rounded-lg"
        />

        
        {/* Title & Read More Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full p-4 bg-gradient-to-t from-black via-black/35 to-pink200/25 rounded-lg shadow-xl shadow-pink200/15 flex items-end">
          <div>
          <h3 className="text-xl lg:text-xl font-bold text-white font-medium-fgm mb-3 ">
            {blogItem.title}
          </h3>
       
         <div className='mb-3'>
         {blogItem.categories?.slice(0, 3).map((category, index) => (
              <span
                key={index}
                className={`text-white mx-1 font-medium py-1 text-xs px-4 rounded-full font-impact-regular bg-opacity-45 shadow-2xl ${colors[index % colors.length]} ${shadows[index % shadows.length]}`}
              >
                {category}
              </span>
            ))}
         </div>
          <a href={`/blog/${blogItem._id}`} className="text-pink200 mt-2 inline-block border-2 border-pink200 px-4 p-1 rounded-full  text-sm">
            Read More
          </a>
          </div>
        </div>
      </Link>
           
    </div>
  );
}
