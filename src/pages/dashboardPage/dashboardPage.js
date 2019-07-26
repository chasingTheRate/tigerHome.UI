import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading } from 'evergreen-ui';
import BlindList from '../../components/blindList/blindList';
import * as blindActions from '../../_actions/blindsActions';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.blindDidChangeState = this.blindDidChangeState.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    this.props.getBlinds();
  }

  handleOnClick(id) {
    const { history } = this.props;
    history.push(`/blinds/${id}`)
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
          <BlindList
            blinds={ blinds }
            blindDidChangeState={ this.blindDidChangeState }
            onClick={ this.handleOnClick }
          />
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    blinds: state.blinds.blinds
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