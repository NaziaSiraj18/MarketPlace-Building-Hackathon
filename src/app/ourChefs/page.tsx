import React from 'react'
import Hero from "./Hero"
import ChefGrid from "./ChefGrid"
import chef1 from "../assets/Chef-Card-1.png";
import chef2 from "../assets/Chef-Card-2.png";
import chef3 from "../assets/Chef-Card-3.png";
import chef4 from "../assets/Chef-Card-4.png";
import Image from "next/image"

const OurChefs = () => {
  return (
    <div>
      <Hero />
      <ChefGrid />

      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src={chef1} alt="" className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"/>
          <Image src={chef2} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef3} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef4} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
        </div>
      </section>
    </div>
  )
}

export default OurChefs

/*
import React from "react";
import Hero from "./Hero";
import ChefGrid from "./ChefGrid";
import chef1 from "..public/assets/Chef1.png";
import chef2 from "..public/assets/Chef2.png";
import chef3 from "..public/assets/Chef3.png";
import chef4 from "..public/assets/Chef4.png";
import Image from "next/image";

const OurChefs = () => {
  return (
    <div>
      <Hero />
      <ChefGrid />

      <section className="bg-black md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image
            src={chef1}
            alt="Chef 1 - Expert in Italian Cuisine"
            className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"
            priority
          />
          <Image
            src={chef2}
            alt="Chef 2 - Specializes in French Dishes"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer"
          />
          <Image
            src={chef3}
            alt="Chef 3 - Renowned for Asian Fusion"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer"
          />
          <Image
            src={chef4}
            alt="Chef 4 - Master of Gourmet Desserts"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default OurChefs;
*/
/*import React from "react";
import Hero from "./Hero";
import ChefGrid from "./ChefGrid";
import Image from "next/image";

const OurChefs = () => {
  return (
    <div>
      <Hero />
      <ChefGrid />

      <section className="bg-black md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image
            src="/assets/Chef1.png" // Corrected path
            alt="Chef 1 - Expert in Italian Cuisine"
            className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"
            priority
          />
          <Image
            src="/assets/Chef2.png" // Corrected path
            alt="Chef 2 - Specializes in French Dishes"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer"
          />
          <Image
            src="/assets/Chef3.png" // Corrected path
            alt="Chef 3 - Renowned for Asian Fusion"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer"
          />
          <Image
            src="/assets/Chef4.png" // Corrected path
            alt="Chef 4 - Master of Gourmet Desserts"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default OurChefs;
*/
