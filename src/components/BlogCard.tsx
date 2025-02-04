import React from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";


const BlogCard = () => {
  const blogs = [
    {
      id: 1,
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022",
      image: "BlogCard1.png",
    },
    {
      id: 2,
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      date: "10 February 2022",
      image: "BlogCard2.png",
    },
    {
      id: 3,
      title: "Curabitur rutrum velit ac congue malesuada",
      date: "10 February 2022",
      image: "BlogCard3.png",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-center text-4xl font-bold mb-8">
        <span className="text-orange-500">Latest</span> News & Blog
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-80"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <FaRegCalendarAlt className="mr-2" />
                <span>{blog.date}</span>
                <FaRegUser className="ml-4 mr-2" />
                <span>Admin</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{blog.title}</h3>
              <a
                href="#"
                className="text-orange-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;