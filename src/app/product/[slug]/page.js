import React from "react";
import ProductDetailImg from "../../../assets/images/product-detail.png";
import UserImg from "../../../assets/images/home/testimonial.png";
import ProductTop from "@/components/Product/ProductTop";
import ProductDetails from "@/components/Product/ProductDetails";
import AddReview from "@/components/Product/AddReview";
import Reviews from "@/components/Product/Reviews";

const getData = async () => {
  return {
    name: "Nars Foundation",
    available: true,
    smallDesc:
      "Flawless Coverage, Radiant Glow: NARS Foundation for Your Perfect Look",
    desc: "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion.",
    information:
      "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion, blurs imperfections, and imparts a radiant, natural-looking glow. Choose NARS foundation for a flawless canvas that enhances your beauty.",
    originalPrice: 25,
    ingredients:
      "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion, blurs imperfections, and imparts a radiant, natural-looking glow. Choose NARS foundation for a flawless canvas that enhances your beauty.",
    precautions:
      "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion, blurs imperfections, and imparts a radiant, natural-looking glow. Choose NARS foundation for a flawless canvas that enhances your beauty.",
    discountedPrice: 25,
    images: [
      ProductDetailImg,
      ProductDetailImg,
      ProductDetailImg,
      ProductDetailImg,
      ProductDetailImg,
      ProductDetailImg,
      ProductDetailImg,
      ProductDetailImg,
    ],
    reviews: [
      {
        userImg: UserImg,
        name: "Sarah M.",
        rating: 4,
        description:
          "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion, blurs imperfections, and imparts a radiant, natural-looking glow. Choose NARS foundation for a flawless canvas that enhances your beauty.",
      },
      {
        userImg: UserImg,
        name: "Sarah M.",
        rating: 4,
        description:
          "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion, blurs imperfections, and imparts a radiant, natural-looking glow. Choose NARS foundation for a flawless canvas that enhances your beauty.",
      },
      {
        userImg: UserImg,
        name: "Sarah M.",
        rating: 4,
        description:
          "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion, blurs imperfections, and imparts a radiant, natural-looking glow. Choose NARS foundation for a flawless canvas that enhances your beauty.",
      },
      {
        userImg: UserImg,
        name: "Sarah M.",
        rating: 4,
        description:
          "NARS foundation is a makeup must-have, known for its impeccable coverage and luxurious finish. With a diverse shade range to suit every skin tone, it effortlessly evens out complexion, blurs imperfections, and imparts a radiant, natural-looking glow. Choose NARS foundation for a flawless canvas that enhances your beauty.",
      },
    ],
  };
};

const Page = async () => {
  const product = await getData();

  return (
    <div className="mt-16 p-5 md:p-0 flex flex-col gap-16">
      <ProductTop product={product} />

      <ProductDetails product={product} />
      <p className="font-bold text-3xl text-center">Customer Reviews</p>
      <AddReview />
      <Reviews reviews={product.reviews} />
    </div>
  );
};

export default Page;
