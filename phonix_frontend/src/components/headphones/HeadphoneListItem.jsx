import React, { Component } from "react";
import { Link } from "react-router-dom";

// import ReviewsContainer from "../../containers/ReviewsContainer";

class HeadphoneListItem extends Component {
  render() {
    const { headphone } = this.props;
    return (
      <li
        className="block border-solid border-2 border-red-400"
        key={headphone.id}
      >
        <Link to={`/headphones/${headphone.id}`}>
          {headphone.manufacturer} - {headphone.model}
        </Link>
      </li>
    );
  }
}

export default HeadphoneListItem;

// <div>
//   <h3>{headphone.manufacturer} - {headphone.model}</h3>
//   <ReviewsContainer headphone={headphone} />
// </div>
