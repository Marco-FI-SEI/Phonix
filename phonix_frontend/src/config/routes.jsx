import React from "react";
import { Route, Switch } from "react-router-dom";
import HeadphonesContainer from "../containers/HeadphonesContainer";
import HeadphonePage from "../components/headphones/HeadphonePage";
import HeadphoneForm from "../components/forms/HeadphoneForm";
import Homepage from "../components/pages/Homepage";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/headphones" component={HeadphonesContainer} />
    <Route path="/headphones/new" component={HeadphoneForm} />
    <Route path="/headphones/:headphoneId" component={HeadphonePage} />
  </Switch>
);
