import React from 'react';
import { connect } from 'react-redux';
import { Pane, TextInputField, SegmentedControl, Button, Strong, Label, Switch, Heading } from 'evergreen-ui';
import * as blindActions from '../../_actions/blindsActions';
import Blind from '../../objects/blind';

import './blindPage.scss';

class BlindPage extends React.Component {
  constructor(props) {
    super(props);
    
    console.log(this.props.blind);

    this.state = {
      blind: this.props.blind || new Blind()
    }
  }

  componentDidMount() {
    this.props.getBlinds();
  }

  didChangeName(e) {

  }

  render() {
    const blind = this.state.blind;

    return (
      <div>
        <Pane display={"flex"} padding={16}>
          <div className="bp-switch-container">
            <Switch 
              height={30}
              checked={ true }
              />
            <Label id="bp-switch-label">Open</Label>
          </div>
          <div className="bp-button-container">
            <Button appearance="primary">Edit</Button>
          </div>
        </Pane>
        <Pane elevation={0} display="flex" flexDirection="column" padding={16}>
          <TextInputField
            label="Name"
            value= { blind.name }
            placeholder="Window/Blind Name"
            onChange={ this.didChangeName }
          />
          <TextInputField
            label="Room"
            placeholder="Bedroom, Living Room, etc."
          />
          <TextInputField
            label="Open Position"
            placeholder="0 - 180"
          />
          <TextInputField
            label="Closed Position"
            placeholder="0 - 180"
          />
          <TextInputField
            label="IP Address"
          />
          <div className="port-input-container">
            <Label id="port-label">Port</Label>
            <SegmentedControl
              name="switch"
              options={[{label: 1, value: 1}, {label: 2, value: 2}, {label: 3, value: 3}]}
              value={0}
            />
          </div>
        </Pane>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blind: state.blinds.data.filter( blind => blind.id === ownProps.match.params.id )[0]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlinds: () => dispatch(blindActions.getBlinds()),
    openBlindWithId: (id) => dispatch(blindActions.openBlindWithId(id)),
    closeBlindWithId: (id) => dispatch(blindActions.closeBlindWithId(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlindPage);