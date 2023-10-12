"use client";
import { deleteReview, getAdminReviews } from "@/api/reviews";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import Reviews from "@/components/Product/Reviews";
import PinkButton from "@/components/buttons/PinkButton";
import React, { useEffect, useState } from "react";

const ProductReviews = ({ id }) => {
  const [loading, setloading] = useState(true);
  const [reviewsData, setreviewsData] = useState({ reviews: [] });
  const [activeDeleteId, setactiveDeleteId] = useState("");
  const [confirmModalOpen, setconfirmModalOpen] = useState(false);

  const getReviews = async ({ page, id }) => {
    getAdminReviews({
      id,
      page: page,
    })
      .then((res) => {
        setreviewsData({
          ...res,
          reviews: [...reviewsData.reviews, ...res.reviews],
        });
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };

  const handleSetActiveId = ({ id }) => {
    setactiveDeleteId(id);
    setconfirmModalOpen(true);
  };

  const handleDeleteReview = () => {
    deleteReview({ id: activeDeleteId })
      .then((res) => {
        let reviewsCopy = [...reviewsData.reviews];

        reviewsCopy = reviewsCopy.filter(
          (review) => review._id != activeDeleteId
        );

        setreviewsData({ ...reviewsData, reviews: reviewsCopy });
      })
      .catch((err) => {});
    setconfirmModalOpen(false);
    setactiveDeleteId("");
  };

  useEffect(() => {
    getReviews({ page: 1, id });
  }, []);

  return (
    <div className="mt-16">
      {loading ? (
        ""
      ) : (
        <>
          <ConfirmModal
            description={"Are you sure you want to delete this review?"}
            open={confirmModalOpen}
            onclose={() => {
              setactiveDeleteId("");
              setconfirmModalOpen(false);
            }}
            onconfirm={handleDeleteReview}
          />
          <Reviews
            reviews={reviewsData.reviews}
            deleteHandler={({ id }) => handleSetActiveId({ id })}
          />
          {reviewsData.currentPage < reviewsData.totalPages && (
            <PinkButton
              text={"Load More"}
              className={"!w-fit px-8 mx-auto"}
              clickHandler={() =>
                getReviews({ page: reviewsData.currentPage + 1, id })
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductReviews;
