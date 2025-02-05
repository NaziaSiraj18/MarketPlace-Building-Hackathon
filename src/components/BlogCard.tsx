/*import React from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import Image from 'next/image';
import Image from 'next/image';


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
            <Image
              src={blog.image}
              alt={blog.title}
              width={320}
              height={192}
              className="w-full h-48 object-cover"
            />
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
*/

/*import React from "react";
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
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full sm:w-80 md:w-72 lg:w-80 xl:w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
*/
/*
import React from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import Image from "next/image"; // Importing Image from next/image

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
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full sm:w-80 md:w-72 lg:w-80 xl:w-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={320} // Adjust width
              height={192} // Adjust height to maintain aspect ratio
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
*/
import React from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import Image from "next/image";

const BlogCard = () => {
  const blogs = [
    {
      id: 1,
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022",
      image: "/BlogCard1.png", // Correct path
    },
    {
      id: 2,
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      date: "10 February 2022",
      image: "/BlogCard2.png", // Correct path
    },
    {
      id: 3,
      title: "Curabitur rutrum velit ac congue malesuada",
      date: "10 February 2022",
      image: "/BlogCard3.png", // Correct path
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
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full sm:w-80 md:w-72 lg:w-80 xl:w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={320}
              height={192}
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
