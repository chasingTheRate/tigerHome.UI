import React from 'react';
import './homePage.scss';
import Blind from '../../components/blind/blind';
import ActionBar from '../../components/actionBar/actionBar';
import AddModal from '../../components/modals/addModal/addModal';
import BlindApi from '../../api/blindApi';
import Snackbar from '../../components/snackbar/snackbar';

const blindApi = new BlindApi();
const BLINDLIST_UPDATED = 'blindListUpdated';

let container;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.changeBlindState = this.changeBlindState.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.didSelectEdit = this.didSelectEdit.bind(this);
    this.filterOutBlindWithId = this.filterOutBlindWithId.bind(this);
    this.didSelectRemoveBlind = this.didSelectRemoveBlind.bind(this);
    this.didSelectEditBlind = this.didSelectEditBlind.bind(this);
    this.openBlindWithId = this.openBlindWithId.bind(this);
    this.closeBlindWithId = this.closeBlindWithId.bind(this);
    this.getBlindList = this.getBlindList.bind(this);
    this.addOrUpdateBlind = this.addOrUpdateBlind.bind(this);
    this.didSelectAddBlind = this.didSelectAddBlind.bind(this);

    this.snackbarRef = React.createRef();

    this.state = {
      isEditing: false,
      snackbarMsg: '',
      activeBlind: {},
      blinds: []
    }
  }

  componentDidMount() {
    this.getBlindList();
  }

  getBlindList() {
    // console.log('getBlindList');
    blindApi.getBlindList()
    .then((results) => {
      //  console.log(results.data);
      this.updateBlindList(results.data);
    })
    .catch((error) => {
      console.log(`Error retrieving blind data: ${ error }`);
    })
  }

  updateBlindList(blindList) {
    // console.log('updateBlindList');
    this.setState({ blinds: blindList });
  }

  changeBlindState(id) {
    const blind = this.state.blinds.find((blind) => { return blind.blindId == id });
    if(blind.blindState == 'open') {
      blind.blindState = 'is-active';
      this.closeBlindWithId(id, blind);
    } else {
      blind.blindState = 'is-active';
      this.openBlindWithId(id, blind);
    }
    this.forceUpdate();
  }

  openBlindWithId(id, blind) {
    blindApi.openBlind(id)
    .then((response) => {
      blind.blindState = 'open';
      this.forceUpdate();
      this.setState({snackbarMsg: 'Opened Successfully!'})
      this.snackbarRef.current.show();
    })
    .catch((err) => {
      console.log(`Error Opening Blinds: ${ err }`);
      blind.blindState = 'closed';
      console.log(blind.blindState);
      this.forceUpdate();
      this.setState({snackbarMsg: 'Failed to Open :( '})
      this.snackbarRef.current.show();
    })
  }

  closeBlindWithId(id, blind) {
    blindApi.closeBlind(id)
    .then((response) => {
      blind.blindState = 'closed';
      this.forceUpdate();
      this.setState({snackbarMsg: 'Closed Successfully!'})
      this.snackbarRef.current.show();
    })
    .catch((err) => {
      console.log(`Error Closing Blinds: ${ err }`);
      blind.blindState = 'open';
      this.forceUpdate();
      this.setState({snackbarMsg: 'Failed to Close :( '})
      this.snackbarRef.current.show();
    })
  }

  didSelectAddBlind() {
    this.props.history.push({
      pathname: `/blinds/addBlind`
    })
  }

  closeModal(modalName) {
    switch (modalName) {
      case 'addModal':
        this.setState({ 
          showAddModal: false,
          activeBlind: {}
        });
        break;
      case 'configureModal':
        this.setState({ 
          showConfigureModal: false,
          activeBlind: {}
        });
        break;
      default:
        break;
    }
  }

  addOrUpdateBlind(data) {
    blindApi.addOrUpdateBlind(data)
    .then((response) => {
      this.getBlindList();
    })
    .catch((err) => {
      console.log(`error adding/editing blind: ${ err }`);
    })
  }

  didSelectEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  didSelectEditBlind(blind) {
    // console.log(`edit blind: ${JSON.stringify(blind, null, 1)}`);

    this.props.history.push({
      pathname: `/blinds/${ blind.blindId }`,
      state: {
        blind
      }
    })
  }

  didSelectRemoveBlind(id) {
    // console.log(`remove blind id: ${ id }`);
    blindApi.removeBlind(id)
    .then((response) => {
      this.filterOutBlindWithId(id);
      this.setState({snackbarMsg: 'Deleted Blind :/ '})
      this.snackbarRef.current.show();
    })
    .catch((err) => {
      this.setState({snackbarMsg: 'Failed deleting Blind :( '})
      this.snackbarRef.current.show();
    })
  }

  filterOutBlindWithId(id) {
    // console.log(`filterOutBlindWithId id: ${ id }`);
    const blinds = this.state.blinds.filter((blind) => { return blind.blindId != id });
    this.setState({blinds: blinds });
  }

  getBlinds() {
    return this.state.blinds.map((blind, index) =>
      <Blind 
        blind={ blind } 
        key={ index } 
        didClick={ this.changeBlindState }
        onEdit={ this.didSelectEditBlind }>
      </Blind>
    )
  }

  render() {
    return (
      <div className="page-container">
        <div className={ this.state.showAddModal ? "modal-open" : "" }>
          <ul className="container"> { this.getBlinds() }</ul>
          {/* <div className="container">
            <ActionBar
              className="container" 
              addBlind={ this.didSelectAddBlind } 
              editSelected={ this.didSelectEdit }
              isEditing= {this.state.isEditing }
            ></ActionBar>
          </div>    */}
        </div>
      <Snackbar ref={ this.snackbarRef } message={ this.state.snackbarMsg }></Snackbar>
      </div>
    )
  }
}

export default HomePage;