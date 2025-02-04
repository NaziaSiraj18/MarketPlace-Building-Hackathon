import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

function AboutUs() {
  return (
    <section className="bg-black px-4 md:px-12 lg:px-24 flex flex-col justify-evenly md:flex-row md:items-center py-12 md:py-20">
      {/* Heading */}
      <div className="text-white w-full md:w-1/2">
        <h1 className="md:text-4xl text-xl font-normal text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>

        <h1 className="text-2xl md:text-5xl font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
        </h1>

        <p className="text-sm md:text-lg font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        <ul className="mt-4">
          <li className="text-sm md:text-lg font-normal mt-4 flex">
            <span className="mr-2">
              <FaCheck />
            </span>
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-sm md:text-lg font-normal mt-4 flex">
            <span className="mr-2">
              <FaCheck />
            </span>
            Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="text-sm md:text-lg font-normal mt-4 flex">
            <span className="mr-2">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
          <button className="bg-[#FF9F0D] text-white w-[160px] h-[50px] rounded-full hover:bg-yellow-800 text-center">
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 md:mt-0 flex flex-col items-center md:items-start">
        {/* Full Image */}
        <Image
          src="/about1.jpeg"
          alt="About Us Image 1"
          className="object-cover rounded-lg w-full"
          width={660}
          height={330}
        />
        {/* Div for Image 2 and Image 3 */}
        <div className="flex flex-col md:flex-row md:gap-4 mt-8">
          <Image
            src="/about2.jpeg"
            alt="About Us Image 2"
            className="object-cover rounded-lg w-full md:w-[50%]"
            width={332}
            height={194}
          />
          <Image
            src="/about3.jpeg"
            alt="About Us Image 3"
            className="object-cover rounded-lg w-full md:w-[50%] mt-4 md:mt-0"
            width={322}
            height={194}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
