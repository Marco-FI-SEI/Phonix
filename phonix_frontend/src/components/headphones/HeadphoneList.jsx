import React, { Component, Fragment } from "react";

import HeadphoneListItem from "./HeadphoneListItem";

class HeadphoneList extends Component {
  render() {
    const { headphones } = this.props;
    const headphoneList = headphones.map(headphone => {
      return (
        <HeadphoneListItem
          key={headphone.id}
          headphone={headphone}
        />
      );
    });
    return (
      <Fragment>
        <ul className="block">{headphoneList}</ul>
      </Fragment>
    )
  }
}

export default HeadphoneList;
