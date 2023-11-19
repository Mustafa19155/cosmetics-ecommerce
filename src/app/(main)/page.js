import AboutProduct from "@/components/Home/AboutProduct";
import Categories from "@/components/Home/Categories";
import SectionOne from "@/components/Home/SectionOne";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Testimonials from "@/components/Home/Testimonials";
import TrendingProducts from "@/components/Home/TrendingProducts";
import { getLatestProducts } from "@/api/products";
import { getUserOffers } from "@/api/offers";
import { recalculateDiscount } from "@/actions/recalculateDiscount";
import { getRandomReviews } from "@/api/reviews";

export default async function Home() {
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
        <Categories />
        <TrendingProducts products={latestProducts} />
        <AboutProduct />
        {offers.length > 0 && <SpecialOffers offers={offers} />}
        {reviews.length > 0 && <Testimonials reviews={reviews} />}
      </div>
    </div>
  );
}
