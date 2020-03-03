import React, { Component } from "react";
import { connect } from "react-redux";

// import { Link } from "react-router-dom";

import ReviewsContainer from "../../containers/ReviewsContainer";

class HeadphonePage extends Component {
  render() {

    const { headphone } = this.props;
    return (
      <div className="h-screen container mx-auto rounded  shadow-lg">
        <img
          className="w-full sticky top-0"
          src="/1_820.jpg"
          alt="headphone banner"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <h1>
              {headphone.manufacturer} {headphone.model}
            </h1>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
        <ReviewsContainer headphone={headphone} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let headphone = {
    id: null,
    model: "",
    manufacturer: ""
  };

  const headphoneId = ownProps.match.params.headphoneId;
  const headphones = state.forum.headphones;

  if (headphones.length > 0) {
    headphone = {
      ...headphones.find(headphone => headphone.id == headphoneId)
    };
  }

  return {
    headphone
  };
};

export default connect(mapStateToProps)(HeadphonePage);
