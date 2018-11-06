import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import DashboardPage2 from '../pages/dashboardPage/dashboardPage';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ DashboardPage2 }/>
        </Switch>
      </div>
    );
  }
}
export default AppRoutes;