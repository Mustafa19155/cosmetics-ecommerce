import AboutProduct from "@/components/Home/AboutProduct";
import Categories from "@/components/Home/Categories";
import SectionOne from "@/components/Home/SectionOne";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Testimonials from "@/components/Home/Testimonials";
import TrendingProducts from "@/components/Home/TrendingProducts";
import FoundationImg from "@/assets/images/home/foundation.png";
import { getAllCategories } from "@/api/categories";
import { getLatestProducts } from "@/api/products";
import { getUserOffers } from "@/api/offers";
import { recalculateDiscount } from "@/actions/recalculateDiscount";
import { getRandomReviews } from "@/api/reviews";

export default async function Home() {
  const categories = (await getAllCategories()).slice(0, 4);
  // const latestProducts = (await getLatestProducts()).slice(0, 4);
  const offers = await getUserOffers();

  const latestProducts = recalculateDiscount({
    products: (await getLatestProducts()).slice(0, 4),
    allOffers: offers,
  });

  const reviews = await getRandomReviews();

  return (
    <div className=" relative top-[-74px] ">
      <SectionOne />
      <div className="flex flex-col gap-20 mt-12">
        <Categories categories={categories} />
        <TrendingProducts products={latestProducts} />
        <AboutProduct />
        {offers.length > 0 && <SpecialOffers offers={offers} />}
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}
