import AboutProduct from "@/components/Home/AboutProduct";
import Categories from "@/components/Home/Categories";
import SectionOne from "@/components/Home/SectionOne";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Testimonials from "@/components/Home/Testimonials";
import TrendingProducts from "@/components/Home/TrendingProducts";
import FoundationImg from "@/assets/images/home/foundation.png";
import { getAllCategories } from "@/api/categories";
import { getLatestProducts } from "@/api/products";

export default async function Home() {
  const categories = (await getAllCategories()).slice(0, 4);
  const latestProducts = await getLatestProducts();

  return (
    <div className=" relative top-[-74px] ">
      <SectionOne />
      <div className="flex flex-col gap-20 mt-12">
        <Categories categories={categories} />
        <TrendingProducts products={latestProducts} />
        <AboutProduct />
        <SpecialOffers />
        <Testimonials />
      </div>
    </div>
  );
}
