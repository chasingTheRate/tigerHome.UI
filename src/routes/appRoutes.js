import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/';
import DashboardPage from '../pages/dashboardPage/dashboardPage';
import BlindPage from '../pages/blindPage/blindPage';
<<<<<<< HEAD
import Home from '../pages/home';
=======
import AccessoryRoutes from './accessoryRoutes';
>>>>>>> change-header-title

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/blinds/:id' component={ BlindPage }/>
          <Route exact path='/blinds' component={ DashboardPage }/>
<<<<<<< HEAD
          <Route exact path='/' component={ Home }/>
=======
          <Route path='/accessory' component={ AccessoryRoutes }/>
          <Route exact path='/' component={ HomePage }/>
>>>>>>> change-header-title
        </Switch>
      </div>
    );
  }
}
export default AppRoutes;