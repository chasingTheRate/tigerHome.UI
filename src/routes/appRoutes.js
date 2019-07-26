import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/';
import DashboardPage from '../pages/dashboardPage/dashboardPage';
import BlindPage from '../pages/blindPage/blindPage';
import AccessoryRoutes from './accessoryRoutes';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/blinds/:id' component={ BlindPage }/>
          <Route exact path='/blinds' component={ DashboardPage }/>
          <Route path='/accessory' component={ AccessoryRoutes }/>
          <Route exact path='/' component={ HomePage }/>
        </Switch>
      </div>
    );
  }
}
export default AppRoutes;