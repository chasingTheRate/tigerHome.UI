import React from 'react';
import { connect } from 'react-redux';
import { Pane, Card, Switch, Heading } from 'evergreen-ui';
import BlindCell from '../../components/blindCell/blindCell';
import * as blindActions from '../../_actions/blindsActions';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.didSelectBlind = this.didSelectBlind.bind(this);
    this.blindDidChangeState = this.blindDidChangeState.bind(this);
  }

  componentDidMount() {
    this.props.getBlinds();
  }

  didSelectBlind(id) {
    console.log(this.props);
    this.props.history.push(`/blinds/${id}`);
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
            { blinds.map( blind => {
                return (
                  <BlindCell 
                    key={ blind.id }
                    blind={ blind }
                    onStateChange={ this.blindDidChangeState }
                    onClick={ this.didSelectBlind }>
                  </BlindCell>    
                )          
              })
            }
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