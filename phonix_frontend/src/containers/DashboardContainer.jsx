import React, { Component } from "react";
import { connect } from "react-redux";

import { loadHeadphones } from "../adapters/headphonesAdapter";
import HeadphoneList from "../components/HeadphoneList";

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <HeadphoneList headphones={this.props.headphones} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    headphones: state.headphones.headphonesCollection
  };
}

export default connect(mapStateToProps, { loadHeadphones })(DashboardContainer);
