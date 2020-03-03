import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";

import { editReview, deleteReview } from "../../actions/reviewActions";

class Review extends Component {
  render() {
    const { review, headphone, deleteReview } = this.props;

    return (
      <li className="py-20">
        <div className="grid grid-cols-2">
          <div className="flex items-center border-solid border-2 px-8">
            <p>{review.title}</p>
          </div>
          <div className="flex flex-row-reverse items-center border-solid border-2 px-8">
            <button onClick={() => deleteReview(review.id, headphone.id)}>
              X Delete
            </button>
            <Link
              to={{
                pathname: `/reviews/edit`,
                state: { headphone, review }
              }}
            >
              <Button btnText="Edit Review" />
            </Link>
          </div>
        </div>
        <div>{review.body}</div>
      </li>
    );
  }
}

export default connect(null, { editReview, deleteReview })(Review);
