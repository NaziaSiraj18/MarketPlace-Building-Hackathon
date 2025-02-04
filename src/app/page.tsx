import HeroNavbar from "@/components/Landing/Landing";
import AboutUs from "@/components/Aboutus";
import FoodCategory from "@/components/FoodCategory";
import HeroMenu from "@/components/HeroMenu";
import PartnersAndClients from "@/components/PartnerClient/PartnerClient";
import Experience from "@/components/Experience/Experience";
import BlogCard from "@/components/BlogCard";
import FoodSection from "@/components/FoodSection";
import Testimonial from "@/components/Testimonal";
import BannerCard from "@/components/BannerCard";
import ProductCard from "@/components/ProductCard";
import Ourchefgrid from "@/components/Ourchefgrid";




export default function Home() {
  return (
    <div>
      {/* Home Page */}
      <HeroNavbar />
      <AboutUs />
      <FoodCategory />
      <HeroMenu />
      <ProductCard/>
      <Ourchefgrid/>
      <Experience />
      <Testimonial />
      <FoodSection />
      <BannerCard />
      <BlogCard />
      <PartnersAndClients/>
      </div>

  )
}      