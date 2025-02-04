
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md max-w-md mx-auto relative">
      <h2 className="text-xl font-semibold text-center mb-8 text-white">
        What our client are saying
      </h2>
      <div className="bg-gray-600 p-6 rounded-lg shadow relative">
        {/* Circular Logo */}
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-md">
            <Image
              src="/elips.man.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-100 text-center leading-relaxed mt-8 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        {/* Client Info */}
        <div className="text-center">
          {/* Star Ratings */}
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </div>
          <p className="font-semibold text-white">Alamin Hasan</p>
          <p className="text-sm text-gray-400">Food Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
