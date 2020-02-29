import React, { Component } from "react";

import Review from "./Review";

class ReviewList extends Component {
  render() {

    const { reviews, headphoneId } = this.props;

    const headphoneReviews = reviews.map(review => {
      return (
        <Review key={review.id} review={review} headphoneId={headphoneId}/>
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
