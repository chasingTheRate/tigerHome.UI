import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/';
import DashboardPage from '../pages/dashboardPage/dashboardPage';
import BlindPage from '../pages/blindPage/blindPage';
import AccessoryLayout from '../layouts/accessoryLayout';
import ContactSensorList from '../components/contactSensorList';

class AccessoryRoutes extends Component {
  render() {
    return (
      <AccessoryLayout>
        <Switch>
          <Route exact path='/accessory/blinds' component={ DashboardPage }/>
          <Route exact path='/accessory/contactSensors' component={ ContactSensorList }/>
        </Switch>
      </AccessoryLayout>
    );
  }
}
export default AccessoryRoutes;