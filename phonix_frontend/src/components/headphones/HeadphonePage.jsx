import React, { Component } from "react";
import { connect } from "react-redux";

import ReviewsContainer from "../../containers/ReviewsContainer";

class HeadphonePage extends Component {
  render() {

    const { headphone } = this.props;
    return (
      <div className="h-full rounded shadow-lg" style={{ overflowY: `scroll` }}>
        <img
          className="w-full"
          src="/1_820.jpg"
          alt="headphone banner"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <h1>
              {headphone.manufacturer} {headphone.model}
            </h1>
          </div>
        </div>
        <div className="px-6">
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
  let headphoneProfile = {
    id: null,
    model: "",
    manufacturer: ""
  };

  const headphoneId = ownProps.match.params.headphoneId;
  const headphones = state.headphone;

  if (headphones.length > 0) {
    headphoneProfile = {
      ...headphones.find(headphone => headphone.id == headphoneId)
    };
  }

  return {
    headphone: headphoneProfile
  };
};

export default connect(mapStateToProps)(HeadphonePage);
