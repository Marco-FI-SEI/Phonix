import React, { Component } from "react";
import { Router } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";
import { Routes } from "./config/routes";

import "./App.css";
// import NotFoundPage from "../components/pages/NotFound";
// import Protected from "../components/pages/Protected";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Routes isSignedIn={this.props.isSignedIn} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.googleAuth.isSignedIn
  };
};

export default connect(mapStateToProps)(App);
