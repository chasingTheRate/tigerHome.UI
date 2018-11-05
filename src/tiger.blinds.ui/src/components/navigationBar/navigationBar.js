import React from 'react';
import './navigationBar.scss';
import images from '../../../public/assets/images';
import { Heading, Pane, Button } from 'evergreen-ui';

class NavigationBar extends React.Component {
  render() {
    return (
      <Pane elevation={1} display="flex" padding={16}>
        <Pane flex={1} alignItems="center" display="flex">
          <div className="nav-bar-img-container">
            <img src={ images.tiger }></img>
          </div>
          <Heading marginLeft={ 8 } size={600}>Tiger Blinds</Heading>
        </Pane>
      </Pane>
    );
  }
}

export default NavigationBar;