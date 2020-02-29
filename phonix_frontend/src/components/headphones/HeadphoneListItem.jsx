import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";

// import ReviewsContainer from "../../containers/ReviewsContainer";

class HeadphoneListItem extends Component {
  render() {
    const { headphone } = this.props;
    return (
      <li
        className="block border-solid border-2 border-red-400"
        key={headphone.id}
      >
        <div className="grid grid-cols-2">
          <Link to={`/headphones/${headphone.id}`}>
            <div className="flex items-center">
              <img
                className="inline-block px-8 py-5"
                src="https://img.icons8.com/nolan/96/headphones.png"
                alt="headphone thumbnail"
              />
              <div className="flex items-center">
                {headphone.manufacturer} - {headphone.model}
              </div>
            </div>
          </Link>
          <div className="flex flex-row-reverse items-center px-8">
            <Link to={`/reviews/new`}>
              <Button btnText="+ Review" />
            </Link>
          </div>
        </div>
      </li>
    );
  }
}

export default HeadphoneListItem;
