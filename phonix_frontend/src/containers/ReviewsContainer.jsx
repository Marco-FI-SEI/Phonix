import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewList from '../components/reviews/ReviewList';
import { loadReviews, deleteReview } from "../adapters/reviewsAdapter";

class ReviewsContainer extends Component {
  componentDidMount() {
    const headphoneId = this.props.headphone.id;
    this.props.loadReviews(headphoneId);
  }

  render() {
    const { headphone, reviews, deleteReview } = this.props;

    return (
      <div>
        <ReviewList reviews={reviews} />
        {/* <ReviewList
          reviews={reviews}
          headphoneId={headphone.id}
          deleteReview={deleteReview}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = ({forum}) => {
  return {
    reviews: forum.reviews
  };
}

export default connect(mapStateToProps, { loadReviews })(ReviewsContainer);
