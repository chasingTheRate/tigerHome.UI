import React from 'react';
import './removeWarningModal.scss';
import images from '../../../../public/assets/images';

class RemoveWarningModal extends React.Component{
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal(event) {
    event.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      pin: this.state.pin,
      room: this.state.room
    }
    this.props.onAdd(data);
    this.closeModal(event);
  }

  render(){
    const modalTitle = 'Warning';
    return(
      <div className="mask">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header-title">
              <div className="modal-header-text">{ modalTitle }</div>
            </div>
            <div className="modal-header-close">
              <input type="image" src={ images.close } onClick={ this.closeModal }></input>
            </div>
          </div>
            <div className="modal-body">
              <form onSubmit={ this.handleSubmit }>
                <div className="button-container">
                  <button id="but-add-add-modal" className="add-modal-button" type="submit">Remove</button>
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

export default RemoveWarningModal;

