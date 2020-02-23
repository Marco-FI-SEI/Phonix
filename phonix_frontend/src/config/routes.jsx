import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Homepage from "../components/pages/HomePage";
import DashboardContainer from "../containers/DashboardContainer";
import Header from "../components/Header";

export const Routes = props => {
  return (
    <Fragment>
      <Header />
      <Route exact path="/" component={Homepage}>
        {props.isSignedIn ? <Redirect to="/dashboard" /> : <Homepage />}
      </Route>
      <Route path="/dashboard" component={DashboardContainer}>
        {!props.isSignedIn ? <Redirect to="/" /> : <DashboardContainer />}
      </Route>
    </Fragment>
  );
};
