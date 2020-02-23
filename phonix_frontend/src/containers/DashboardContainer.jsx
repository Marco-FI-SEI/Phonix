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
        <div>
          <HeadphoneList headphones={this.props.headphones} />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    headphones: state.headphoneReducer.headphones
  };
}

export default connect(mapStateToProps, { loadHeadphones })(DashboardContainer);
