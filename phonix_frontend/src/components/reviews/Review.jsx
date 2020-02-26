import React, { Component } from "react";

class Review extends Component {
  render() {
    const { review } = this.props;

    return (
      <li>
        <div>
          <h3>{review.title}</h3>
          <p>{review.body}</p>
        </div>
      </li>
    )
  }
}

export default Review;
