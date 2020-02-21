import React, { Fragment, Component } from "react";
import GoogleAuth from "./forms/GoogleAuth";

import { LogoLink } from "../config/links";

// conditionally apply CSS classes
const classNames = require("classnames");

class Header extends Component {
  state = {
    isOpen: false
  };

  handleMenuToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const menuClass = classNames(["px-4", "pt-2", "pb-4", "sm:flex"], {
      block: this.state.isOpen,
      hidden: !this.state.isOpen
    });

    return (
      <Fragment>
        <header className="sm:flex sm:justify-between sm:items-center sm:px-8 sm:py-3 bg-landingCream">
          <div className="flex items-center justify-between px-4 py-3 sm:p-0">
            <LogoLink />
            <div className="sm:hidden">
              <button
                onClick={this.handleMenuToggle}
                type="button"
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              >
                <svg
                  className="h-12 w-12 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  {this.state.isOpen ? (
                    <path
                      className="heroicon-ui"
                      d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"
                    />
                  ) : (
                    <path
                      className="heroicon-ui"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div className={menuClass}>
            <GoogleAuth />
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
