import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavigationBar from './components/navigationBar/navigationBar.js'
import HomePage from './pages/homePage/homePage';
import BlindPage from './pages/blindPage/blindPage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/blinds/addBlind' component={ BlindPage }/>
          <Route path='/blinds/:blind' component={ BlindPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;
