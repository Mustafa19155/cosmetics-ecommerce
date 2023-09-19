import AboutProduct from "@/components/Home/AboutProduct";
import Categories from "@/components/Home/Categories";
import SectionOne from "@/components/Home/SectionOne";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Testimonials from "@/components/Home/Testimonials";
import TrendingProducts from "@/components/Home/TrendingProducts";

export default function Home() {
  return (
    <div className=" relative top-[-65px] ">
      <SectionOne />
      <div className="flex flex-col gap-20 mt-12">
        <Categories />
        <TrendingProducts />
        <AboutProduct />
        <SpecialOffers />
        <Testimonials />
      </div>
    </div>
  );
}
