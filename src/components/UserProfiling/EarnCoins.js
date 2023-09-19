import React from "react";
import SignupImg from "../../assets/images/profiling/signup.png";
import PurchaseImg from "../../assets/images/profiling/purchase.png";
import EarnImg from "../../assets/images/profiling/earn.png";
import Image from "next/image";

const EarnCoins = () => {
  return (
    <div className="mt-16">
      <p className="text-3xl font-bold">How to Earn Coins</p>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-5 my-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <Image src={SignupImg} />
          <p className="font-bold">SIGN UP</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Image src={PurchaseImg} />
          <p className="font-bold">PURCHASE ITEM</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Image src={EarnImg} />
          <p className="font-bold">EARN COIN</p>
        </div>
      </div>
      <div className="mx-auto w-[95%] sm:w-[100%] flex flex-col md:flex-row justify-between gap-12 mt-16">
        <div className="flex flex-col items-center gap-7 bg-primary text-white p-5 rounded-lg">
          <p className="font-semibold">Shop More, Earn More Points</p>
          <p className="text-sm">
            When you purchase more products, you unlock the opportunity to earn
            even more valuable points in our rewards program. We believe in
            rewarding our loyal customers, and the more you shop with us, the
            more you'll benefit. These points can be redeemed for exciting
            rewards, discounts, or exclusive offers on future purchases. So,
            whether you're shopping for essentials or treating yourself to
            something special, remember that every purchase not only brings you
            the products you love but also brings you closer to earning
            fantastic rewards. Start accumulating points today and enjoy the
            perks of being a valued member of our community!
          </p>
        </div>
        <div className="flex flex-col items-center gap-7 bg-primary text-white p-5 rounded-lg">
          <p className="font-semibold">Shop More, Earn More Points</p>
          <p className="text-sm">
            When you purchase more products, you unlock the opportunity to earn
            even more valuable points in our rewards program. We believe in
            rewarding our loyal customers, and the more you shop with us, the
            more you'll benefit. These points can be redeemed for exciting
            rewards, discounts, or exclusive offers on future purchases. So,
            whether you're shopping for essentials or treating yourself to
            something special, remember that every purchase not only brings you
            the products you love but also brings you closer to earning
            fantastic rewards. Start accumulating points today and enjoy the
            perks of being a valued member of our community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarnCoins;
