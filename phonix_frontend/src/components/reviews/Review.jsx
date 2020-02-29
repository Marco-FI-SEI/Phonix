import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteReview } from "../../actions/reviewActions";

class Review extends Component {
  render() {
    const { review, headphoneId, deleteReview } = this.props;

    return (
      <li className="py-20">
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
