import React, { Component } from "react";
import { connect } from "react-redux";

import { getReviews } from "../adapters/reviewsAdapter";
import ReviewList from "../components/reviews/ReviewList";
import { SearchBar } from "../components/headphones/SearchBar";

class ReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchField: ""
    };
  }

  componentDidMount() {
    const headphoneId = this.props.headphone.id;
    this.props.getReviews(headphoneId);
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { reviews, headphone } = this.props;
    const query = this.state.searchField;
    let filteredReviews = [];

    if (reviews.length > 0) {
      filteredReviews = reviews.filter(review => {
        return review.title.toLowerCase().includes(query.toLowerCase());
      });
    }

    return (
      <div className="h-full px-8 py-8">
        <h2 className="text-4xl underline">Reviews</h2>
        <div className="h-10%">
          <div className="flex items-center py-6 w-2/6">
            <SearchBar
              placeholder="Search Reviews..."
              handleSearch={this.handleSearch}
            />
          </div>
        </div>
        <div className="h-90%">
          <ReviewList reviews={filteredReviews} headphone={headphone} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ review }) => {
  return {
    reviews: review
  };
};

export default connect(mapStateToProps, { getReviews })(ReviewsContainer);
