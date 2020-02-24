import React from "react";
import cuid from "cuid";

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={cuid()}>
            <div>
              <h3>
                {review.title}
              </h3>
              <p>review.body</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
