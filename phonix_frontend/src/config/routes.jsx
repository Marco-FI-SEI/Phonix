import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import HeadphonesContainer from '../containers/HeadphonesContainer';
import HeadphonePage from "../components/headphones/HeadphonePage";
import Homepage from "../components/pages/Homepage";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/headphones" component={HeadphonesContainer} />
      <Route path="/headphones/:headphoneId" component={HeadphonePage} />
    </Switch>
  </App>)

export default Routes
