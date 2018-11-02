import React from 'react';
import './blindPage.scss';
import images from '../../../public/assets/images';
import LabelWithInputError from '../../components/mulituse/labelWithInputError/labelWithInputError';
import BlindApi from '../../api/blindApi';
import Snackbar from '../../components/snackbar/snackbar';

let container;

const blindApi = new BlindApi();

const blindDirection = {
  increase: 'increase',
  decrease: 'decrease'
}

const limitOption = {
  open: 'open',
  closed: 'closed'
}

class BlindPage extends React.Component{
  constructor(props) {
    super(props);
    
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIpAddressChange = this.handleIpAddressChange.bind(this);
    this.handlePortChange = this.handlePortChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.handleAngleLimitOptionChange = this.handleAngleLimitOptionChange.bind(this);
    this.navigateBackDelayed = this.navigateBackDelayed.bind(this);

    this.snackbarRef = React.createRef();
    var blind = {};

    if (props.history.location.state) {
      blind = props.history.location.state.blind;
    }

    this.state = {
      id: blind.blindId || '',
      name: blind.blindName || '',
      room: blind.room || '',
      ipAddress: blind.ipAddress || '',
      port: blind.port || '',
      positionCurrent: blind.positionCurrent || 0,
      positionLimitOpen: blind.positionLimitOpen || 90,
      positionLimitClosed: blind.positionLimitClosed || 0,
      positionLimitOption: 'open',
      displayAngle: blind.positionLimitOpen || 90,
      snackbarMsg: '',
    }
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      id: this.state.id,
      name: this.state.name,
      ipAddress: this.state.ipAddress,
      room: this.state.room,
      port: this.state.port,
      positionCurrent: this.state.positionCurrent,
      positionLimitOpen: this.state.positionLimitOpen,
      positionLimitClosed: this.state.positionLimitClosed
    }
    console.log(`positionLimitOpen: ${ this.state.positionLimitOpen }`),
    console.log(`data: ${JSON.stringify(data, null, 1)}`);
    blindApi.addBlind(data)
    .then((response) => {
      this.setState({snackbarMsg: ' Added Blind :( '})
      this.snackbarRef.current.show();
      this.navigateBackDelayed();
    })
    .catch((err) => {
      this.setState({snackbarMsg: ' Failed to add blind :( '})
      this.snackbarRef.current.show();
      this.navigateBackDelayed();
    })
  }

  navigateBackDelayed() {
    const delay = 3000;
    setTimeout( () => { this.props.history.goBack(); }, delay );
  }

  handleNameChange(target) {
    this.setState({ name: target });
  }

  handleIpAddressChange(target) {
    this.setState({ ipAddress: target });
  }

  handleRoomChange(target) {
    this.setState({ room: target });
  }

  handlePortChange(target) {
    this.setState({ port: target });
  }

  setPosition(dir) {
    const increment = 5;
    var oldPosition = this.state.displayAngle;
    var targetPosition = this.state.displayAngle;
    switch(dir) {
      case blindDirection.increase:
        targetPosition += increment;
        break;
      default: 
        targetPosition -= increment;
        break;
    }

    console.log(this.state.positionLimitOption);

    var data = {
      displayAngle: targetPosition,
      currentposition: targetPosition
    };

    switch(this.state.positionLimitOption) {
      case limitOption.open:
        data.angleLimitOpen = targetPosition;
        break;
      case limitOption.closed:
        data.angleLimitClosed = targetPosition;
        break;
      default:
        console.log('break');
        break;
    }

    blindApi.setPositionLimit(this.state.id, this.state.positionLimitOption, targetPosition)
    .then((response) => {
      //  Success :)
      console.log('success!');
    })
    .catch((err) => {
      //  Error :(
        console.log('failed');
    })

    this.setState(data);
  }

  handleAngleLimitOptionChange(e) {
    // console.log(`handleAngleLimitOptionChange value: ${ e.target.value }`);
    const value = e.target.value;
    let targetAngle = 0;
    if (value == 'open') {
      targetAngle = this.state.positionLimitOpen;
    } else {
      targetAngle = this.state.positionLimitClosed;
    }
    this.setState({
      positionLimitOption: value,
      displayAngle: targetAngle
    });
  }

  render(){
    const modalTitle = (this.state.id) ? 'Edit Blind' : 'Add Blind';
    const addSaveButtonTitle = (this.state.id) ? 'SAVE' : 'ADD';

    return(
      <div className="page-container">
        <div className="blind-page-body">
          <div className="properties-container">
            <LabelWithInputError 
              title="Name"
              placeHolder="Living Room Window"
              value={ this.state.name }
              onChange={ this.handleNameChange }
            ></LabelWithInputError>
            <LabelWithInputError
              title="Room"
              placeHolder="(optional)"
              value={ this.state.room }
              onChange={ this.handleRoomChange }
            ></LabelWithInputError>
            <LabelWithInputError
              title="IP Address"
              placeHolder="XXX.XXX.XX.XXX"
              value={ this.state.ipAddress }
              onChange={ this.handleIpAddressChange }
            ></LabelWithInputError>
            <LabelWithInputError
              title="Port"
              placeHolder="1"
              value={ this.state.port }
              onChange={ this.handlePortChange }
            ></LabelWithInputError>
          </div>
          <div className="properties-container">
            <div id="set-position-hdr" className="section-hdr-text">SET POSITIONS</div>
            <div id="set-pos-opt-container">
              <div id="set-pos-opt-open">
                <input 
                  type="radio"
                  id="open"
                  value="open"
                  checked = { this.state.positionLimitOption === 'open' }
                  onChange={ this.handleAngleLimitOptionChange }/>
                <label className="label-text" htmlFor="open">OPEN</label>
              </div>
              <div id="set-pos-opt-closed">
                <input
                  type="radio"
                  id="closed"
                  value="closed"
                  checked= { this.state.positionLimitOption === 'closed'}
                  onChange={ this.handleAngleLimitOptionChange }/>
                <label className="label-text" htmlFor="closed">CLOSED</label>
              </div>
            </div>
            <div id="position-ctrl-container">
              <div id="angle-up" className="position-ctrl-item">
                <div id="ab-edit-button-container" className="button-container">
                  <input type="image" src={ images.arrowUp } onClick={ () => { this.setPosition(blindDirection.increase)} }></input>
                </div>
              </div>
              <div id="display-position" className="position-ctrl-item" >{`${ this.state.displayAngle }˚`}</div>
              <div id="angle-down" className="position-ctrl-item">
                <div id="ab-edit-button-container" className="button-container position-ctrl-item">
                  <input type="image" src={ images.arrowDown } onClick={ () => { this.setPosition(blindDirection.decrease)} }></input>
                </div>
              </div>
            </div>
            <div className="action-button-container">
              <button id="button-add" className="add-modal-button" type="submit" onClick={ this.handleSubmit }>{ addSaveButtonTitle }</button>
              <button id="button-cancel" className="add-modal-button" onClick={ this.handleCancel }>CANCEL</button>
            </div>
          </div>
        </div>
        <Snackbar ref={ this.snackbarRef } message={ this.state.snackbarMsg }></Snackbar>
      </div>
    );
  }
}

export default BlindPage;