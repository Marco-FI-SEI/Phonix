import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteReview } from "../adapters/reviewsAdapter";

class Review extends Component {
  // handleOnClick = () => {
  //   this.props.deleteReview(this.props.review.id, this.props.headphoneId);
  // };
  render() {
    const { review, deleteReview, headphoneId } = this.props;

    return (
      <li key={review.id}>
        <div className="grid grid-cols-2">
          <div className="flex items-center border-solid border-2 px-8">
            <p>{review.title}</p>
          </div>
          <div className="flex flex-row-reverse items-center border-solid border-2 px-8">
            <button onClick={() => deleteReview(review.id, headphoneId)}>
              X Delete
            </button>
          </div>
        </div>
        <div>{review.body}</div>
      </li>
    );
  }
}

export default connect(null, { deleteReview })(Review);
