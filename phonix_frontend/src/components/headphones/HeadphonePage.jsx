import React, { Component } from "react";
import { connect } from 'react-redux';

// import { Link } from "react-router-dom";

// import ReviewsContainer from "../../containers/ReviewsContainer";

class HeadphonePage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.headphone.manufacturer} {this.props.headphone.model}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let headphone = {
    id: null,
    model: "",
    manufacturer: ""
  };

  const headphoneId = ownProps.match.params.headphoneId;
  const headphones = state.headphones;

  console.log(headphoneId)

  if (headphones.length > 0) {
    headphone = { ...headphones.find(headphone => headphone.id == headphoneId) }
  }

  return {
    headphone,
  };
  // return {
  //   headphone,
  //   reviews: state.reviews.headphoneReviewsCollection
  // };
};

export default connect(mapStateToProps)(HeadphonePage);
// export default connect(mapStateToProps, { loadReviews })(HeadphonePage);
