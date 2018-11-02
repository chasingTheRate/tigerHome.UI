
import React from 'react';
import images from '../../../public/assets/images';
import './actionBar.scss';

var ActionBar = (props) => {
  let editIcon = props.isEditing ? images.check : images.edit;
  
  const didClickAddBlind = () => {
    props.addBlind();
  }

  const didClickEdit = () => {
    props.editSelected();
  }

  return (
    <div className="action-bar-container">
      <div className="action-bar-button-container">
        <input type="image" src={ images.add } onClick={ didClickAddBlind }></input>
      </div>
      <div id="ab-edit-button-container" className="action-bar-button-container">
        <input type="image" src={ editIcon } onClick={ didClickEdit }></input>
      </div>
    </div>
  )
}

export default ActionBar;