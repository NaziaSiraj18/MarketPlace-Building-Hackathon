import React from "react";
import Image from "next/image";

function MeetChef() {
  return (
    <section className="bg-black px-6 sm:px-8 md:px-[135px] lg:px-[160px] py-12 sm:py-16 lg:py-20">

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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:mt-12 justify-center">
        <div className="relative group">
          <Image 
            src="/chef1.png" 
            alt="Chef 1" 
            width={200} 
            height={200} 
            className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative group">
          <Image 
            src="/chef2.png" 
            alt="Chef 2" 
            width={200} 
            height={200} 
            className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative group">
          <Image 
            src="/chef3.png" 
            alt="Chef 3" 
            width={200} 
            height={200} 
            className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative group">
          <Image 
            src="/chef4.png" 
            alt="Chef 4" 
            width={200} 
            height={200} 
            className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
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





















/*import React from "react";
import Image from "next/image";

function MeetChef() {
  return (
    <section className="bg-black px-6 sm:px-8 md:px-[135px] py-12 sm:py-16 lg:py-20">

      {/* Section Heading */
  /*    <div className="flex flex-col justify-center items-center text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-white">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>

      {/* Images Section */
 /*     <div className="flex flex-wrap justify-center gap-6 mt-8 md:mt-12">
        <Image 
          src="/chef1.png" 
          alt="Chef 1" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
        <Image 
          src="/chef2.png" 
          alt="Chef 2" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
        <Image 
          src="/chef3.png" 
          alt="Chef 3" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
        <Image 
          src="/chef4.png" 
          alt="Chef 4" 
          width={200} 
          height={200} 
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer rounded-xl"
        />
      </div>

      {/* Button Section */
   /*  <div className="flex justify-center mt-8 md:mt-10">
        <button className="bg-transparent border-2 border-orange-500 text-white w-[140px] sm:w-[160px] md:w-[190px] lg:w-[210px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] rounded-[40px] hover:bg-[#FF9F0D] hover:text-black transition duration-300">
          See More
        </button>
      </div>
    </section>
  );
}

export default MeetChef;
*/
/*
import React from "react";
import Image from "next/image";

function MeetChef() {
  const chefs = [
    { src: "/chef1.png", alt: "Chef 1 - Expert in Italian Cuisine" },
    { src: "/chef2.png", alt: "Chef 2 - Master of French Pastries" },
    { src: "/chef3.png", alt: "Chef 3 - Japanese Sushi Specialist" },
    { src: "/chef4.png", alt: "Chef 4 - BBQ & Grill Expert" },
  ];

  return (
    <section className="bg-black px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 lg:py-20">
      {/* Section Heading */
   /*   <div className="flex flex-col justify-center items-center text-center mb-12">
        <h1 className="text-xl sm:text-2xl md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-[50px] font-bold text-white">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>

      {/* Images Section */
   /*   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:mt-12 justify-center">
        {chefs.map((chef, index) => (
          <div key={index} className="relative w-full max-w-[280px] mx-auto">
            <Image
              src={chef.src}
              alt={chef.alt}
              width={300}
              height={300}
              className="rounded-xl object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Button Section */
   /*   <div className="flex justify-center mt-8 md:mt-10">
        <button className="bg-transparent border-2 border-orange-500 text-white w-[140px] sm:w-[160px] md:w-[190px] lg:w-[210px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] rounded-[40px] hover:bg-[#FF9F0D] hover:text-black transition duration-300">
          See More
        </button>
      </div>
    </section>
  );
}

export default MeetChef;
*/