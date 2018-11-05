import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading } from 'evergreen-ui';
import blindStates from '../../objects/blindStates';

class BlindCell extends React.PureComponent {
  constructor(props) {
    super(props);
    this.blind = props.blind

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      checked: this.transformBlindState()
    }
  }

  transformBlindState() {
    switch (this.blind.stateCurrent) {
      case blindStates.open:
        return true
      default:
        return false;
    }
  }

  handleOnChange(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <Card
        elevation={1}
        display="flex"
        padding={16}
        marginBottom={8}>
          <Pane flex={1} display="flex" alignItems="center">
            <Heading marginRight={8} size={500}>{ this.blind.name }</Heading>
          </Pane>
          <Pane flex={1} display="flex" flexDirection="row-reverse">
            <Switch 
              height={30}
              float="right"
              checked={ this.state.checked }
              onChange={ this.handleOnChange }/>
          </Pane>
      </Card>
    )
  }
}

export default BlindCell;