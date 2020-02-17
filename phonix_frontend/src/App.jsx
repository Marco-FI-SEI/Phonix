import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Login, Register } from "./config/hocs";

import Nav from "./components/Nav";

function App() {
  return (
    <div id="app">
      <Nav />
      <Switch>
        {/* <Route exact path={"/"} component={HomePage} /> */}
        {/* <Route path={"/dashboard"} component={Dashboard} /> */}
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
      </Switch>
    </div>
  );
}

export default App;
