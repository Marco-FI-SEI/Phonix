import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import history from "./history";

import "./App.css";
// import NotFoundPage from "../components/pages/NotFound";
// import Protected from "../components/pages/Protected";
import Header from "./components/Header";

import Homepage from "./components/pages/HomePage";
import Dashboard from "./components/pages/Dashboard";

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
          <Route path="/dashboard" component={Dashboard}>
            {
              !this.props.isSignedIn
              ? <Redirect to="/" />
              : <Dashboard />
            }
          </Route>
          {/* <Route exact path={"/protected"} component={Protected} /> */}
          {/* <Route path="*" component={NotFoundPage} /> */}
          {/* <Routes /> */}
        </Router>
        {JSON.stringify(this.props.isSignedIn)}
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
