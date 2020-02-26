import React, { Component } from "react";

import Review from "./Review";

class ReviewList extends Component {
  render() {

    // const { reviews, headphoneId } = this.props;
    // const headphones = reviews.filter(review => {
    //   return review.headphone_id === headphoneId;
    // });

    const headphoneReviews = this.props.reviews.map(review => {
      return (
        <Review
          key={review.id}
          review={review}
        />
      );
    });

    return (
      <ul>
        { headphoneReviews }
      </ul>
    );
  }
};

export default ReviewList;
