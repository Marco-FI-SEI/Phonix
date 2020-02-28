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
          <div>
            <img className="inline-block px-8 py-5" src="https://img.icons8.com/nolan/96/headphones.png" />
            <h3 className="inline-block">{headphone.manufacturer} - {headphone.model}</h3>
          </div>
        </Link>
      </li>
    );
  }
}

export default HeadphoneListItem;

