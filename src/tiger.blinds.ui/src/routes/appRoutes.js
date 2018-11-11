import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/dashboardPage/dashboardPage';
import BlindPage from '../pages/blindPage/blindPage';


class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ DashboardPage }/>
          <Route path='/blinds/:id' component={ BlindPage }/>
        </Switch>
      </div>
    );
  }
}
export default AppRoutes;