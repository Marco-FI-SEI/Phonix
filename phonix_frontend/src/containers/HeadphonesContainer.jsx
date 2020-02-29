import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchHeadphones } from "../actions/headphoneActions";
import HeadphoneList from "../components/headphones/HeadphoneList";
import { SearchBar } from "../components/headphones/SearchBar";
import { Button } from "../components/common/Button";

class HeadphonesContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchField: ""
    };
  }

  componentDidMount() {
    this.props.fetchHeadphones();
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const headphones = this.props.headphones;
    const query = this.state.searchField;

    const filteredHeadphones = headphones.filter(headphone => {
      return (
        headphone.model.toLowerCase().includes(query.toLowerCase()) ||
        headphone.manufacturer.toLowerCase().includes(query.toLowerCase())
      );
    });

    return (
      <div className="h-full container mx-auto">
        <div className="sticky top-0 h-10% grid grid-cols-2">
          <div className="flex items-center px-1">
            <SearchBar
              placeholder="Search Headphones..."
              handleSearch={this.handleSearch}
            />
            </div>
            <div className="flex flex-row-reverse items-center px-8">
              <Link to={`/headphones/new`}>
                <Button btnText="+ Headphone" />
              </Link>
            </div>
        </div>
        <div className="h-90%" style={{ overflowY: `scroll` }}>
          <HeadphoneList headphones={filteredHeadphones} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({forum}) => {
  return {
    headphones: forum.headphones
  };
};

export default connect(mapStateToProps, { fetchHeadphones })(
  HeadphonesContainer
);
