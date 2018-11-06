import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading } from 'evergreen-ui';
import BlindCell from '../../components/blindCell/blindCell';
import './dashboardPage.scss';
import * as blindActions from '../../_actions/blindsActions';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.blindList = this.blindList.bind(this);
    this.blindDidChangeState = this.blindDidChangeState.bind(this);

  }

  componentDidMount() {
    this.props.getBlinds();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  blindList() {
    return this.props.blinds.map((blind) => 
      <BlindCell key={blind.id} blind={ blind } onStateChange={ this.blindDidChangeState }></BlindCell>
    );
  }

  blindDidChangeState(blind, open) {
    if (open) {
      const test = Object.assign({}, blind, {
        name: 'mark'
      })
      this.props.openBlindWithId(test);
    } 
    else {
      //this.props.closeBlindWithId(this.blind.id); 
    }
  }

  render() {
    const blinds = this.props.blinds || [];
    console.log(blinds);
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
  return {
    blinds: state.blinds.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlinds: () => dispatch(blindActions.getBlinds()),
    openBlindWithId: (id) => dispatch(blindActions.openBlindWithId(id)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);