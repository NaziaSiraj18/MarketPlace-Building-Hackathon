/*import React from 'react';
import Image from 'next/image';
import { FaUtensils, FaHamburger, FaWineGlass } from 'react-icons/fa';

const FoodSection = () => {
  const images = [
    { src: '/foodcard1.png', alt: 'Food 1', width: 'w-[362px]', height: 'h-[356px]' },
    { src: '/foodcard2.png', alt: 'Food 2', width: 'w-[281px]', height: 'h-[231px]' },
    { src: '/foodcard3.png', alt: 'Food 3', width: 'w-[244px]', height: 'h-[306px]' },
    { src: '/foodcard4.png', alt: 'Food 4', width: 'w-[221px]', height: 'h-[226px]' },
    { src: '/foodcard5.png', alt: 'Food 5', width: 'w-[161px]', height: 'h-[168px]' },
    { src: '/foodcard6.png', alt: 'Food 6', width: 'w-[161px]', height: 'h-[166px]' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Images */
    /*      <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className={`relative ${image.width} ${image.height}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Center Content */
      /*    <div className="col-span-1 text-center md:text-left">
            <h2 className="text-yellow-400 text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-2xl font-semibold mb-2">
              Extra Ordinary Taste <br /> And Experienced
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dictum pellentesque dapibus. Sed non nulla sit amet mi ultricies
              fringilla in sed orci.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: FaUtensils, label: 'Fast Food' },
                { icon: FaHamburger, label: 'Lunch' },
                { icon: FaWineGlass, label: 'Dinner' },
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon size={30} className="text-yellow-400 mb-2" />
                  <p className="text-sm">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-bold inline-block">
                30+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
*/

/*import React from 'react';
import Image from 'next/image';
import { FaUtensils, FaHamburger, FaWineGlass } from 'react-icons/fa';

const FoodSection = () => {
  const images = [
    { src: '/shopD1.png', alt: 'menu 3' },
    { src: '/shopD2.png', alt: 'menu 2' },
    { src: '/shopD3.png', alt: 'menu4' },
    { src: '/shopD4.png', alt: 'menu5' },
    { src: '/lastpic.png', alt: 'lastpic1' },
    { src: '/menu1.png' , alt: 'menu1'}
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Images */
      /*   <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Center Content */
   /*      <div className="col-span-1 text-center md:text-left mt-8">
            <h2 className="text-yellow-400 text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-2xl font-semibold mb-2">
              Extra Ordinary Taste <br /> And Experienced
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dictum pellentesque dapibus. Sed non nulla sit amet mi ultricies
              fringilla in sed orci.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[{ icon: FaUtensils, label: 'Fast Food' },
                { icon: FaHamburger, label: 'Lunch' },
                { icon: FaWineGlass, label: 'Dinner' },
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon size={30} className="text-yellow-400 mb-2" />
                  <p className="text-sm">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg font-bold inline-block">
                30+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
*/
import React from 'react';
import Image from 'next/image';
import { FaUtensils, FaHamburger, FaWineGlass } from 'react-icons/fa';

const FoodSection = () => {
  const images = [
    { src: '/shopD1.png', alt: 'menu 3' },
    { src: '/shopD2.png', alt: 'menu 2' },
    { src: '/shopD3.png', alt: 'menu4' },
    { src: '/shopD4.png', alt: 'menu5' },
    { src: '/lastpic.png', alt: 'lastpic1' },
    { src: '/menu1.png', alt: 'menu1' }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Images */}
          <div className="grid grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Center Content */}
          <div className="col-span-1 text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-yellow-400 text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Extra Ordinary Taste <br /> And Experienced
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dictum pellentesque dapibus. Sed non nulla sit amet mi ultricies
              fringilla in sed orci.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[{ icon: FaUtensils, label: 'Fast Food' },
                { icon: FaHamburger, label: 'Lunch' },
                { icon: FaWineGlass, label: 'Dinner' },
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon size={30} className="text-yellow-400 mb-2" />
                  <p className="text-sm sm:text-base">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg font-bold inline-block">
                30+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
