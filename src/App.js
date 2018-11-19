import React, { Component } from 'react';
import NavigationBar from './components/navigationBar/navigationBar.js'
import PrimaryLayout from './layouts/primaryLayout';
import AppRoutes from './routes/appRoutes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryLayout>
          <AppRoutes/>
        </PrimaryLayout>
      </div>
    );
  }
}

export default App;
