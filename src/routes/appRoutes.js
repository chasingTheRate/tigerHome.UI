import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/dashboardPage/dashboardPage';
import BlindPage from '../pages/blindPage/blindPage';
import Home from '../pages/home';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/blinds/:id' component={ BlindPage }/>
          <Route exact path='/blinds' component={ DashboardPage }/>
          <Route exact path='/' component={ Home }/>
        </Switch>
      </div>
    );
  }
}
export default AppRoutes;