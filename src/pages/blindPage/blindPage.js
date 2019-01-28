import React from 'react';
import { connect } from 'react-redux';
import { Pane, TextInputField, Button, Heading, Strong, Text, IconButton} from 'evergreen-ui';
import * as blindActions from '../../_actions/blindsActions';
import Slider, {Range} from 'rc-slider';

import 'rc-slider/assets/index.css';

class BlindPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      name: '',
      ipAddress: '',
      port: '',
    }
  }

  componentDidMount() {
    const { getBlindById, match } = this.props;
    const id = match.params.id;
    getBlindById(id);
  }

  componentDidUpdate(prevProps) {
    const { blind } = this.props;
    if (prevProps.blind !== blind) {
      this.setState({
        name: blind.name,
        ipAddress: blind.ipAddress,
        port: blind.port,
      })
    }
    return true;
  }

  handleOnChange(e) {
    var key = ''
    var value = ''
    switch (e.target.id) {
      case 'TextInputField-name':
        key = 'name';
        value = e.target.value;
        break;
      case 'TextInputField-ipAddress':
        key = 'ipAddress';
        value = e.target.value;
        break;
      case 'TextInputField-port':
        key = 'port';
        value = e.target.value;
        break;
      default:
        break;
    }
    this.setState({
      [key]: value,
    })
  }

  handleDelete(e){
    console.log('handleDelete');
  }

  handleCancel(e){
    console.log('handleCancel');
    const { history } = this.props;
    history.push('/blinds');
  }

  render() {
    const { name, ipAddress, port } = this.state;

    return (
      <div>
        <Pane>
          <TextInputField
            id="name"
            label="Name"
            value={name}
            placeholder="Enter Name..."
            onChange={this.handleOnChange}
          />
          <TextInputField
            id="ipAddress"
            label="IP Address"
            value={ipAddress}
            onChange={this.handleOnChange}
            placeholder="Enter IP Address..."
          />
          <TextInputField
            id="port"
            label="Port"
            value={port}
            onChange={this.handleOnChange}
            placeholder="Enter Port Number..."
          />
          <Pane paddingTop={0} paddingBottom={25}>
            <Heading size={400} fontWeight={500} color="#425A70" marginBottom={5}>Current Position</Heading>
            <Pane paddingLeft={5} paddingTop={5}>
              <Slider
              />
            </Pane>
          </Pane>
          <Pane paddingTop={0} paddingBottom={25}>
            <Pane display="flex" alignItems="center">
              <Pane flexGrow={1}>
                <Heading size={400} fontWeight={500} color="#425A70" marginBottom={5}>Angle Limits</Heading>
              </Pane>
              <Pane flexGrow={1} display="flex" flexDirection="row-reverse">
                <IconButton icon="swap-vertical"></IconButton>
              </Pane>
            </Pane>
            <Pane paddingLeft={5} paddingTop={5}>
              <Range></Range>
            </Pane>
          </Pane>
          <Pane display="flex" flexDirection="row-reverse">
            <Button intent="none" onClick={ this.handleCancel }>Cancel</Button>
            <Button marginRight={16} intent="danger" onClick={ this.handleDelete }>Delete</Button>
          </Pane>
        </Pane>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blind: state.blinds.blind,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlindById: (id) => dispatch(blindActions.getBlindById(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlindPage);