import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";

import "./App.css";
// import NotFoundPage from "../components/pages/NotFound";
// import Protected from "../components/pages/Protected";
import Header from "./components/Header";

import Homepage from "./components/pages/HomePage";
import DashboardContainer from "./containers/DashboardContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Route exact path="/" component={Homepage}>
            {
              this.props.isSignedIn
              ? <Redirect to="/dashboard" />
              : <Homepage />
            }
          </Route>
          <Route path="/dashboard" component={DashboardContainer}>
            {
              !this.props.isSignedIn
              ? <Redirect to="/" />
              : <DashboardContainer />
            }
          </Route>
          {/* <Route exact path={"/protected"} component={Protected} /> */}
          {/* <Route path="*" component={NotFoundPage} /> */}
          {/* <Routes /> */}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.googleAuth.isSignedIn
  };
};

export default connect(mapStateToProps)(App);
