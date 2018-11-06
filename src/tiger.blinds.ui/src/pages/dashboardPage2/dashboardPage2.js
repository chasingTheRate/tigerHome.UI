import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading } from 'evergreen-ui';
import BlindList from '../../components/blindList/blindList';
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

  blindList() {
    return this.props.blinds.map( blind => 
      <BlindCell key={ blind.id } blind={ blind } onStateChange={ this.blindDidChangeState }></BlindCell>
    );
  }

  blindDidChangeState(id, isOpen) {
    if (isOpen) {
      this.props.openBlindWithId(id);
    } 
    else {
      this.props.closeBlindWithId(id); 
    }
  }

  render() {
    const blinds = this.props.blinds || [];
    return (
      <div>
        { blinds.length > 0 &&
          <Pane elevation={0} display="flex" flexDirection="column" padding={16}>
            <BlindList blinds={ blinds } blindDidChangeState={ this.blindDidChangeState }></BlindList>
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
    openBlindWithId: (id) => dispatch(blindActions.openBlindWithId(id)),
    closeBlindWithId: (id) => dispatch(blindActions.closeBlindWithId(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);