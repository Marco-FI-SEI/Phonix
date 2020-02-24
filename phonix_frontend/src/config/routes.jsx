import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import DashboardContainer from "../containers/DashboardContainer";
import Homepage from "../components/pages/HomePage";
import HeadphonePage from "../components/pages/HeadphonePage.jsx";

export const Routes = props => {
  return (
    <Fragment>
      <Header />
      <Route exact path="/" component={Homepage}>
        {props.isSignedIn ? <Redirect to="/dashboard" /> : <Homepage />}
      </Route>
      <Route path="/dashboard" component={DashboardContainer}>
        {!props.isSignedIn ? <Redirect to="/" /> : <DashboardContainer />}
        <Route path="dashboard/:headphone_id" component={HeadphonePage}></Route>
      </Route>
    </Fragment>
  );
};
