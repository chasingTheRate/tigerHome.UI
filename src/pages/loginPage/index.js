import React from 'react';
import { connect } from 'react-redux';
import { 
  Pane,
  TextInputField,
  Button,
  FormField
} from 'evergreen-ui';

import * as userActions from '../../_actions/userActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
  
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  attemptLogin = (e) => {
    e.preventDefault();
    const { attemptLogin } = this.props;
    const { username, password } = this.state;
    attemptLogin({
      username,
      password
    })
  }

  render() {

    const { loading, user } = this.props;

    return (
      <Pane 
        display="flex"
        height="100%"
        flexDirection="column"
      >
        <form onSubmit={this.attemptLogin}>
          <TextInputField
            id="login-username-field"
            label="Username"
            required
            placeholder="Username"
            onChange={this.handleUsernameChange}
          />
          <TextInputField
            id="login-password-field"
            label="Password"
            required
            description=""
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
          <Pane display="flex" flexDirection={"row-reverse"}>
            <Button type="submit">Login</Button>
          </Pane>
        </form>
      
      </Pane>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.user.loading,
    user: state.user.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptLogin: (userInfo) => dispatch(userActions.attemptLogin(userInfo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);