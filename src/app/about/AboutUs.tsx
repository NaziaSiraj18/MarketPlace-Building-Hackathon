import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutUs() {
  const teamMembers = [
    { name: "Mark Henry", role: "Senior Chef", image: "/tm1.png" },
    { name: "Craig Daniel", role: "Assistant Chef", image: "/tm2.png" },
    { name: "Martin Jerry", role: "Pastry Chef", image: "/tm3.png" },
    { name: "Tom Harrison", role: "Head Chef", image: "/tm4.png" },
  ];

  return (
    <div>
      {/* First Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
              src="/about1.png"
              width={336}
              height={536}
            />
          </div>
          <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src="/youget.png"
              width={309}
              height={271}
            />
            <Image
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src="/youget2.png"
              width={309}
              height={382}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us ___
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block" />
                Watch video
                <img src="/Play.png"
                 alt="play logo" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col w-[579px]">
          <h1 className="text-black text-3xl font-bold mt-3">Why Choose Us</h1>
          <p className="text-black text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src="/about.png"
            width={1320}
            height={386}
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="text-white body-font">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              { image: "/student.png", title: "BEST CHEF", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat." },
              { image: "/coffee.png", title: "120 Item Food", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat." },
              { image: "/man.png", title: "Clean Environment", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat." },
            ].map((item, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full flex justify-center items-center flex-col border-2 rounded-lg overflow-hidden">
                  <Image src={item.image} width={80} height={80} alt="icon" />
                  <div className="p-6 text-center">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold">{item.title}</h1>
                    <p className="leading-relaxed mb-3 text-black">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="py-16 bg-yellow-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Team Member
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Meet our talented and dedicated team of professionals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center mt-4 space-x-3 text-gray-500">
                    <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
