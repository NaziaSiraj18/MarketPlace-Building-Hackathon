/*import Image from "next/image";

const OurChefs = () => {
  return (
    <section className="bg-black md:px-[135px] px-4 py-[50px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
        <div className="w-[200px] md:w-[305px] md:h-[280px]">
          <Image 
            src="/assets/chef1.png" 
            alt="Chef 1" 
            width={300} 
            height={280} 
            className="w-full h-full object-cover cursor-pointer" 
          />
        </div>
        <div className="w-[200px] md:w-[280px] md:h-[280px]">
          <Image 
            src="/assets/chef2.png" 
            alt="Chef 2" 
            width={300} 
            height={280} 
            className="w-full h-full object-cover cursor-pointer" 
          />
        </div>
        <div className="w-[200px] md:w-[280px] md:h-[280px]">
          <Image 
            src="/assets/chef3.png" 
            alt="Chef 3" 
            width={300} 
            height={280} 
            className="w-full h-full object-cover cursor-pointer" 
          />
        </div>
        <div className="w-[200px] md:w-[280px] md:h-[280px]">
          <Image 
            src="/assets/chef4.png" 
            alt="Chef 4" 
            width={300} 
            height={280} 
            className="w-full h-full object-cover cursor-pointer" 
          />
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
*/
import Image from "next/image";

const OurChefs = () => {
  return (
    <section className="bg-black md:px-[135px] px-4 py-[50px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
        <div className="w-[200px] md:w-[305px] md:h-[280px]">
          <Image
            src="/assets/chef1.png" // Image path should be from the public folder
            alt="Chef 1"
            width={300}
            height={280}
            className="w-full h-auto object-cover cursor-pointer" // Ensuring responsiveness
          />
        </div>
        <div className="w-[200px] md:w-[280px] md:h-[280px]">
          <Image
            src="/assets/chef2.png"
            alt="Chef 2"
            width={300}
            height={280}
            className="w-full h-auto object-cover cursor-pointer"
          />
        </div>
        <div className="w-[200px] md:w-[280px] md:h-[280px]">
          <Image
            src="/assets/chef3.png"
            alt="Chef 3"
            width={300}
            height={280}
            className="w-full h-auto object-cover cursor-pointer"
          />
        </div>
        <div className="w-[200px] md:w-[280px] md:h-[280px]">
          <Image
            src="/assets/chef4.png"
            alt="Chef 4"
            width={300}
            height={280}
            className="w-full h-auto object-cover cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
