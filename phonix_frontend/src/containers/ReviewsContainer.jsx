import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchReviews } from "../actions/reviewActions";
import ReviewList from '../components/reviews/ReviewList';
import { SearchBar } from "../components/headphones/SearchBar";
import { Button } from "../components/common/Button";



class ReviewsContainer extends Component {
  componentDidMount() {
    const headphoneId = this.props.headphone.id;
    this.props.fetchReviews(headphoneId);
  }

  render() {
    const { reviews, headphone } = this.props;

    return (
      <div className="h-full">
        <h2>Reviews</h2>
        <div className="sticky top-0 h-10%">
          <div className="flex items-center px-1 w-2/6">
            <SearchBar
              placeholder="Search Reviews..."
              handleSearch={this.handleSearch}
            />
          </div>
        </div>
        <div className="h-90%" style={{ overflowY: `scroll` }}>
          <ReviewList reviews={reviews} headphoneId={headphone.id} />
          {/* Filtered Reviews */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({forum}) => {
  return {
    reviews: forum.reviews
  };
}

export default connect(mapStateToProps, { fetchReviews })(ReviewsContainer);

{/* <div className="h-full" style={{ overflowY: `scroll` }}>
  <ReviewList reviews={reviews} headphoneId={headphone.id} />
</div> */}
