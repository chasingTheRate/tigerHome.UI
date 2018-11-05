import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading } from 'evergreen-ui';
import BlindCell from '../../components/blindCell/blindCell';
import './homePage.scss';
import * as blindActions from '../../_actions/blindsActions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.blindList = this.blindList.bind(this);
  }

  componentDidMount() {
    this.props.getBlinds();
  }

  blindList() {
    return this.props.blinds.map((blind) =>
      <BlindCell key={blind.id} blind={ blind }></BlindCell>
    );
  }
  render() {
    const blinds = this.props.blinds || [];
    console.log(blinds.length);
    

    return (
      <div>
        { blinds.length > 0 &&
          <Pane elevation={0} display="flex" flexDirection="column" padding={16}>
            { this.blindList() }
          </Pane>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
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