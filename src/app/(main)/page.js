import AboutProduct from "@/components/Home/AboutProduct";
import Categories from "@/components/Home/Categories";
import SectionOne from "@/components/Home/SectionOne";
import SpecialOffers from "@/components/Home/SpecialOffers";
import Testimonials from "@/components/Home/Testimonials";
import TrendingProducts from "@/components/Home/TrendingProducts";
import FoundationImg from "@/assets/images/home/foundation.png";

const getLatestProducts = async () => {
  return [
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
  ];
};

export default async function Home() {
  const latestProducts = await getLatestProducts();

  return (
    <div className=" relative top-[-74px] ">
      <SectionOne />
      <div className="flex flex-col gap-20 mt-12">
        <Categories />
        <TrendingProducts products={latestProducts} />
        <AboutProduct />
        <SpecialOffers />
        <Testimonials />
      </div>
    </div>
  );
}
