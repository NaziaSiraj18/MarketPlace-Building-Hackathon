import React from "react";

const BannerCard = () => {
  return (
    <div
      className="relative  h-72 md:h-96 bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: "url('banner-bg.png')" }}
    >
      <div className="bg-black bg-opacity-10 p-8 text-center text-white rounded-lg px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-4">
          We Document Every Food Bean Process <br />
          <span className="text-orange-500">until it is saved</span>
        </h1>
        <p className="text-sm text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg">
            Read More
          </button>
          <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg">
            <span>Play Video</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-1.933A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-1.933a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;