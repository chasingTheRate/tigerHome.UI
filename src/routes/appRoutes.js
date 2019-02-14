import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/dashboardPage/dashboardPage';
import BlindPage from '../pages/blindPage/blindPage';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/blinds/:id' component={ BlindPage }/>
          <Route exact path='/blinds' component={ DashboardPage }/>
        </Switch>
      </div>
    );
  }
}
export default AppRoutes;