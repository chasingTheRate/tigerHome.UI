import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading, IconButton} from 'evergreen-ui';
import blindStates from '../../objects/blindStates';

class BlindCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    
    this.state = {
      checked: this.transformBlindState()
    }
  }

  transformBlindState() {
    switch (this.props.blind.blindState) {
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
    e.stopPropagation();
  }

  render() {
    const { onClick } = this.props;
    return (
        <Card
          elevation={0}
          display="flex"
          padding={16}
          marginBottom={8}
        >
          <Pane flex={1} display="flex" alignItems="center" onClick={ onClick }>
            <Heading marginRight={8} size={500}>{ this.props.blind.name }</Heading>
          </Pane>
          <Pane flex={1} display="flex" flexDirection="row-reverse"></Pane>
            <Switch
              id="switch"
              height={30}
              float="right"
              checked={ this.state.checked }
              onChange={ this.handleOnChange }
            />
        </Card>
    )
  }
}

export default BlindCell;