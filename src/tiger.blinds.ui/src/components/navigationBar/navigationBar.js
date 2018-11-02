import React from 'react';
import './navigationBar.scss';
import images from '../../../public/assets/images';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar-container">
        <div className="nav-bar-img-container ">
          <img src={ images.tiger }/>
        </div>
        <div className="nav-bar-text-container">
          <div id="nav-title">Tiger Blinds</div>
        </div>
        <div className="nav-bar-image-container">
          <img src={ images.notConnected }/>
        </div> 
        <div className="nav-bar-button-container">
          <input type="image" src={ images.add }></input>
        </div>  
      </div>
    );
  }
}

export default NavigationBar;