import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading } from 'evergreen-ui';
import blindStates from '../../objects/blindStates';

class BlindCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.didSelectCard = this.didSelectCard.bind(this);
    
    this.state = {
      checked: this.transformBlindState()
    }
  }

  transformBlindState() {
    switch (this.props.blind.stateCurrent) {
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
    this.props.onStateChange(this.props.blind.id, e.target.checked);
  }

  didSelectCard(e){
    this.props.onClick(this.props.blind.id);
  }

  render() {
    return (
      <Card
        elevation={1}
        display="flex"
        padding={16}
        marginBottom={8}
        onClick={this.didSelectCard}>
          <Pane flex={1} display="flex" alignItems="center">
            <Heading marginRight={8} size={500}>{ this.props.blind.name }</Heading>
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