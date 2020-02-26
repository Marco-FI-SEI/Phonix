import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { loadHeadphones } from "../adapters/headphonesAdapter";
import HeadphoneList from "../components/headphones/HeadphoneList";
import { SearchBar } from "../components/headphones/SearchBar";

class HeadphonesContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchField: ""
    };
  }

  componentDidMount() {
    this.props.loadHeadphones();
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const headphones = this.props.headphones;
    const query = this.state.searchField;


    const filteredHeadphones = headphones.filter(headphone => {
      return headphone.model.toLowerCase().includes(query.toLowerCase()) ||
             headphone.manufacturer.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <Fragment>
        <div>
          <SearchBar placeholder="Search Headphones..." handleSearch={this.handleSearch} />
        </div>
        <div>
          <HeadphoneList headphones={filteredHeadphones} />
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    headphones: state.headphones
  };
}

export default connect(mapStateToProps, { loadHeadphones })(HeadphonesContainer);
