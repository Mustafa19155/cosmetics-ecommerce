import Image from "next/image";
import React from "react";
import Stars from "../Stars";
import DeleteIcon from "@/assets/icons/delete-black.svg";

const Reviews = ({ reviews, deleteHandler }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {reviews.map((review) => (
        <div className="md:w-[49%] shadow-review-box bg-white p-4 rounded-lg mb-12 min-h-[132px] relative">
          {deleteHandler && (
            <Image
              src={DeleteIcon}
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => deleteHandler({ id: review._id })}
            />
          )}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="w-[100px]">
              {review.picture && (
                <img src={review.picture} className="rounded-full h-[100px]" />
              )}
            </div>
            <div className="flex flex-col gap-1 w-[80%]">
              <div className="flex gap-2 items-center">
                <p className="font-semibold text-primary text-lg">
                  {review.name}
                </p>
                <Stars
                  rating={review.rating}
                  starColor={"#FB6B90"}
                  textColor={"primary"}
                />
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
