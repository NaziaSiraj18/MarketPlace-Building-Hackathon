/*import React from "react";
import Image from "next/image"

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "../../../public/ourchef1.png" },
  { name: "Jorina Begum", role: "Chef", image: "../../../public/ourchef2.png" },
  { name: "M. Mohammad", role: "Chef", image: "../../../public/ourchef3.png" },
  { name: "Munna Kathy", role: "Chef", image: "../../../public/ourchef4.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "../../../public/ourchef5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/../../../public/ourchef6.png" },
  { name: "Motin Molladst", role: "Chef", image: "../../../public/ourchef7.png" },
  { name: "William Rumi", role: "Chef", image: "../../../public/ourchef8.jpeg" },
  { name: "Kets William Roy", role: "Chef", image: "../../../public/ourchef9.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/../../../public/ourchef10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/../../../public/ourchef11.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/../../../public/ourchef12.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20"> {/* Adding mt-20 for margin top */
   /*   {/* Grid with responsive columns */
    /*  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600" // Complete purple border for the 7th box
                : "border-4 border-transparent hover:border-purple-600" // Hover effect for other boxes
            }`}
          >
            {/* Chef Image */
       /*     <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={40}
                height={60}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */
        /*    <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
*/
/*
import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/ourchef1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/ourchef2.png" },
  { name: "M. Mohammad", role: "Chef", image: "/ourchef3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/ourchef4.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/ourchef5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/ourchef6.png" },
  { name: "Motin Molladst", role: "Chef", image: "/ourchef7.png" },
  { name: "William Rumi", role: "Chef", image: "/ourchef8.jpeg" },
  { name: "Kets William Roy", role: "Chef", image: "/ourchef9.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/ourchef10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/ourchef11.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/ourchef12.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20">
      {/* Responsive Grid Layout */
   /*   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600"
                : "border-4 border-transparent hover:border-purple-600"
            }`}
          >
            {/* Chef Image */
        /*    <div className="flex-1 relative w-full h-56">
              <Image
                src={chef.image}
                alt={chef.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Chef Info */
       /*     <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
*/
/*
import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/ourchef1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/ourchef2.png" },
  { name: "M. Mohammad", role: "Chef", image: "/ourchef3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/ourchef4.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/ourchef5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/ourchef6.png" },
  { name: "Motin Molladst", role: "Chef", image: "/ourchef7.png" },
  { name: "William Rumi", role: "Chef", image: "/ourchef8.png" },
  { name: "Kets William Roy", role: "Chef", image: "/ourchef9.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/ourchef10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/ourchef11.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/ourchef12.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20">
      {/* Responsive Grid Layout */
  /*    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600"
                : "border-4 border-transparent hover:border-purple-600"
            }`}
          >
            {/* Chef Image */
      /*      <div className="relative w-full h-56">
              <Image
                src={chef.image}
                alt={chef.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                unoptimized
              />
            </div>

            {/* Chef Info */
      /*      <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
*/
import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/ourchef1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/ourchef2.png" },
  { name: "M. Mohammad", role: "Chef", image: "/ourchef3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/ourchef4.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/ourchef5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/ourchef6.png" },
  { name: "Motin Molladst", role: "Chef", image: "/ourchef7.png" },
  { name: "William Rumi", role: "Chef", image: "/ourchef8.png" },
  { name: "Kets William Roy", role: "Chef", image: "/ourchef9.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/ourchef10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/ourchef11.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/ourchef12.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600"
                : "border-4 border-transparent hover:border-purple-600"
            }`}
          >
            {/* Chef Image */}
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">
              <Image
                src={chef.image}
                alt={chef.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                unoptimized
              />
            </div>

            {/* Chef Info */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
