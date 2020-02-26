import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewList from '../components/reviews/ReviewList';
import { loadReviews } from "../adapters/reviewsAdapter";


class ReviewsContainer extends Component {
  componentDidMount() {
    const headphoneId = this.props.headphone.id;
    this.props.loadReviews(headphoneId);
  }

  render() {
    return (
      <div>
        <ReviewList
          reviews={this.props.reviews}
          headphoneId={this.headphoneId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  // let relevantReviews = [];

  // if (state.reviews > 0) {
  //   relevantReviews = state.reviews.filter(review => {
  //     return review.headphone_id === ownProps.headphone.id;
  //   });
  // }

  return {
    reviews: state.reviews
  };
}

export default connect(mapStateToProps, { loadReviews })(ReviewsContainer)
