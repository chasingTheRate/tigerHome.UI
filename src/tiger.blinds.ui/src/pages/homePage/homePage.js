import React from 'react';
import { connect } from 'react-redux';
import { Heading, Pane, Button } from 'evergreen-ui';
import './homePage.scss';
import * as blindActions from '../../_actions/blindsActions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBlinds();
  }

  render() {
    const blinds = this.props.blinds || [];
    console.log(blinds.length);
    return (
      <div>
        { blinds.length > 0 &&
          <Pane elevation={1} display="flex" padding={16}></Pane>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blinds: state.blinds.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlinds: () => dispatch(blindActions.getBlinds())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);