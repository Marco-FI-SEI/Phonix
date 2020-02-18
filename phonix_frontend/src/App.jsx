import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import "./App.css";
import { logout } from "./actions/userActions";
// import NotFoundPage from "../components/pages/NotFound";
// import Protected from "../components/pages/Protected";
import Nav from "./components/Nav";

import Homepage from "./components/pages/HomePage";
import Dashboard from "./components/pages/Dashboard";
import LoginForm from "./components/forms/LoginForm";
import RegistrationForm from "./components/forms/RegistrationForm";

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path={"/"} component={Homepage} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route exact path={"/login"} component={LoginForm} />
      <Route exact path={"/register"} component={RegistrationForm} />
      {/* <Route exact path={"/protected"} component={Protected} /> */}
      {/* <Route path="*" component={NotFoundPage} /> */}
      {/* <Routes /> */}
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { logout })(App);
