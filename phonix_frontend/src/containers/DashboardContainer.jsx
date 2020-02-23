import React, { Component } from "react";
import { connect } from "react-redux";

import { loadHeadphones } from "../adapters/headphonesAdapter";
import HeadphoneList from "../components/HeadphoneList";

class DashboardContainer extends Component {

  componentDidMount() {
    this.props.loadHeadphones();
  }

  render() {
    return (
      <div>
        <HeadphoneList headphones={this.props.headphones}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    headphones: state.headphoneReducer.headphones
  };
}

export default connect(mapStateToProps, { loadHeadphones })(DashboardContainer);
