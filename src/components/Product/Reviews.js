import Image from "next/image";
import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {reviews.map((review) => (
        <div className="md:w-[49%] shadow-review-box bg-white p-4 rounded-lg mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="w-[100px]">
              <Image src={review.userImg} className="rounded-full h-[100px]" />
            </div>
            <div className="flex flex-col gap-1 w-[80%]">
              <div>
                <p className="font-semibold text-primary text-lg">
                  {review.name}
                </p>
              </div>
              <p className="text-sm">{review.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
