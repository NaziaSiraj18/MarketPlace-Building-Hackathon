import React from "react";
import Image from "next/image";

function MeetChef() {
  return (
    <section className="bg-black px-6 sm:px-8 md:px-[135px] py-12 sm:py-16 lg:py-20">

      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-white">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 md:mt-12">
        <Image 
          src="/chef1.jpeg" 
          alt="Chef 1" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
        <Image 
          src="/chef2.jpeg" 
          alt="Chef 2" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
        <Image 
          src="/chef3.jpeg" 
          alt="Chef 3" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
        <Image 
          src="/chef4.jpeg" 
          alt="Chef 4" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-8 md:mt-10">
        <button className="bg-transparent border-2 border-orange-500 text-white w-[140px] sm:w-[160px] md:w-[190px] lg:w-[210px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] rounded-[40px] hover:bg-[#FF9F0D] hover:text-black transition duration-300">
          See More
        </button>
      </div>
    </section>
  );
}

export default MeetChef;
