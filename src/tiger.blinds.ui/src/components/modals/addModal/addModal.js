import React from 'react';
import './addModal.scss';
import images from '../../../../public/assets/images';

import LabelWithInputError from '../../mulituse/labelWithInputError/labelWithInputError';

class AddModal extends React.Component{
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIpAddressChange = this.handleIpAddressChange.bind(this);
    this.handlePortChange = this.handlePortChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);

    this.state = {
      id: this.props.blind.blindid || '',
      name: this.props.blind.blindname || '',
      room: this.props.blind.room || '',
      ipAddress: this.props.blind.ipaddress || '',
      port: this.props.blind.port || ''
    }
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({
      name: '',
      room: '',
      ipAddress: '',
      port: ''
    })
    this.props.closeModal('addModal');
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      id: this.state.id,
      name: this.state.name,
      ipAddress: this.state.ipAddress,
      room: this.state.room,
      port: this.state.port
    }
    this.props.onAdd(data);
    this.closeModal(event);
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

  render(){
    const modalTitle = (this.props.blind.blindid) ? 'Edit Blind' : 'Add Blind';
    const addSaveButtonTitle = (this.props.blind.blindid) ? 'SAVE' : 'ADD';

    return(
      <div className="mask">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header-title">
              <div className="modal-header-text">{ modalTitle }</div>
            </div>
            <div className="modal-header-close">
              {/* <input type="image" src="./assets/images/ic_add_black_24px.svg" onClick={ this.closeModal }></input> */}
              <input type="image" src={ images.close } onClick={ this.closeModal }></input>
            </div>
          </div>
            <div className="modal-body">
              <form onSubmit={ this.handleSubmit }>
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
                <div className="button-container">
                  <button id="but-add-add-modal" className="add-modal-button" type="submit">{ addSaveButtonTitle }</button>
                  <button id="but-cancel-add-modal" className="add-modal-button" onClick={ this.closeModal }>CANCEL</button>
                </div>
              </form>
            </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    );
  }
}

export default AddModal;

