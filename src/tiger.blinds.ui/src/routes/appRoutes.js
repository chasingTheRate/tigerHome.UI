import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/homePage/homePage';
import BlindPage from '../pages/blindPage/blindPage';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/blinds/addBlind' component={ BlindPage }/>
          <Route path='/blinds/:blind' component={ BlindPage }/>
        </Switch>
      </div>
    );
  }
}

export default AppRoutes;