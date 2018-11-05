import React, { Component } from 'react';
import NavigationBar from '../components/navigationBar/navigationBar.js'

class PrimaryLayout extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        { this.props.children }
      </div>
    );
  }
}

export default PrimaryLayout;