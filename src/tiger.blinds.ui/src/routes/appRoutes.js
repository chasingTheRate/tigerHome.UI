import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'/>
        </Switch>
      </div>
    );
  }
}
export default AppRoutes;