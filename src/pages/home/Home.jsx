import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pane } from 'evergreen-ui';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <Pane>
            <Link to="/blinds">Blinds</Link>
        </Pane>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);