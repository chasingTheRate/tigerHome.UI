import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading, Link } from 'evergreen-ui';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log('test');
  }

  componentDidMount() {
  
  }

  render() {
    return (
      <Pane 
        display="flex"
        flexDirection="column"
      >
        <Link href="/accessory/blinds">Blinds</Link>
        <Link href="/accessory/contactSensors">Contact Sensors</Link>
      </Pane>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);