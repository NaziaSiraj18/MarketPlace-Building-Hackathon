/*import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaShareAlt, FaRegComment } from "react-icons/fa";

const BlogPost = () => {
  const posts = [
    {
      id: 1,
      

      image: "public/BlogCard1.png/300x200", // Replace with your image URL
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022",
    },
    {
      id: 2,
      image: "public/BlogCard2.png/300x200", // Replace with your image URL
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      date: "10 February 2022",
    },
    {
      id: 3,
      image: "public/BlogCard3.png/300x200", // Replace with your image URL
      title: "Curabitur rutrum velit ac congue malesuada",
      date: "10 February 2022",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          <span className="text-orange-500">Latest</span> News & Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <FaCalendarAlt /> {post.date}
                </p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <button className="text-orange-500 mt-4 hover:underline">
                  Learn More
                </button>
                <div className="flex justify-between items-center mt-4 text-gray-400">
                  <FaShareAlt className="hover:text-orange-500 cursor-pointer" />
                  <FaRegComment className="hover:text-orange-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
*/
/*
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaShareAlt, FaRegComment } from "react-icons/fa";

const BlogPost = () => {
  const posts = [
    {
      id: 1,
      image: "/BlogCard1.png", // Correct image path
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022",
    },
    {
      id: 2,
      image: "/BlogCard2.png", // Correct image path
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      date: "10 February 2022",
    },
    {
      id: 3,
      image: "/BlogCard3.png", // Correct image path
      title: "Curabitur rutrum velit ac congue malesuada",
      date: "10 February 2022",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          <span className="text-orange-500">Latest</span> News & Blog
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300} // Set width
                height={200} // Set height
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <FaCalendarAlt /> {post.date}
                </p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <button className="text-orange-500 mt-4 hover:underline">
                  Learn More
                </button>
                <div className="flex justify-between items-center mt-4 text-gray-400">
                  <FaShareAlt className="hover:text-orange-500 cursor-pointer" />
                  <FaRegComment className="hover:text-orange-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
*/
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaShareAlt, FaRegComment } from "react-icons/fa";

const BlogPost = () => {
  const posts = [
    {
      id: 1,
      image: "/BlogCard1.png", // Correct image path
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022",
    },
    {
      id: 2,
      image: "/BlogCard2.png", // Correct image path
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      date: "10 February 2022",
    },
    {
      id: 3,
      image: "/BlogCard3.png", // Correct image path
      title: "Curabitur rutrum velit ac congue malesuada",
      date: "10 February 2022",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          <span className="text-orange-500">Latest</span> News & Blog
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300} // Set width
                height={200} // Set height
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <FaCalendarAlt /> {post.date}
                </p>
                <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                <button className="text-orange-500 mt-4 hover:underline">
                  Learn More
                </button>
                <div className="flex justify-between items-center mt-4 text-gray-400">
                  <FaShareAlt className="hover:text-orange-500 cursor-pointer" />
                  <FaRegComment className="hover:text-orange-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
