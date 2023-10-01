import React from "react";

const AddReviewStars = ({ rating, setrating }) => {
  return (
    <div className="flex gap-1">
      {Array.from(Array(5), (e, i) => {
        return (
          <div onClick={() => setrating(i + 1)} className="cursor-pointer">
            {i < rating ? (
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.80312 0.486328L6.28736 3.6485L9.60623 4.15558L7.20467 6.617L7.77161 10.0926L4.80312 8.45162L1.83463 10.0926L2.40156 6.617L0 4.15558L3.31887 3.6485L4.80312 0.486328Z"
                  fill={"#FB6B90"}
                />
              </svg>
            ) : (
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.8"
                  d="M6.03676 0.486328L7.521 3.6485L10.8399 4.15558L8.43832 6.617L9.00525 10.0926L6.03676 8.45162L3.06827 10.0926L3.6352 6.617L1.23364 4.15558L4.55252 3.6485L6.03676 0.486328Z"
                  stroke={"#FB6B90"}
                  stroke-width="0.53368"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AddReviewStars;
