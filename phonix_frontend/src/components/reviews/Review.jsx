import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";

import { updateReview, removeReview } from "../../adapters/reviewsAdapter";

class Review extends Component {
  render() {
    const { review, headphone, removeReview } = this.props;

    return (
      <li
        key={review.id}
        className="px-8 border-solid border-2 grid grid-rows-1"
      >
        <div className="grid grid-cols-2 h-10 py-10 align-middle">
          <p className="text-xl">{review.title}</p>
          <div className="flex justify-end">
            <div className="px-2">
              <Link
                to={{
                  pathname: `/reviews/edit`,
                  state: { headphone, review }
                }}
              >
                <Button btnText="Edit" />
              </Link>
            </div>
            <div className="px-2">
              <button
                onClick={() => removeReview(review.id, headphone.id)}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="h-90 py-10">
          <pre style={{ whiteSpace: `pre-line` }}>{review.body}</pre>
        </div>
      </li>
    );
  }
}

export default connect(null, { updateReview, removeReview })(Review);
