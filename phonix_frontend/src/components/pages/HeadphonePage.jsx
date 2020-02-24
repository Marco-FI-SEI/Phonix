import React, { Component } from 'react';
import {connect} from 'react-redux';

import { loadReviews  } from "../../adapters/reviewsAdapter";
import ReviewList from "../ReviewList";

class HeadphonePage extends Component {

  componentDidMount() {
    this.props.loadReviews();
  }

  render() {
    const { headphone } = this.props;

    return (
      <div>
        <h1>{headphone.model}</h1>
        <h2>{headphone.manufacturer}</h2>
        <div>
          <ReviewList reviews={this.props.reviews} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  let headphone = {
    model: "",
    manufacturer: ""
  };

  const headphoneId = ownProps.params.headphone_id;

  if (state.headphones.length > 0) {
    headphone = {...state.headphones.find(headphone => headphone.id === headphoneId)}
  }

  return {
    headphone,
    reviews: state.reviewReducer.reviews
  };
};

export default connect(mapStateToProps, { loadReviews })(HeadphonePage);
