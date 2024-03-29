import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { COMMUNITY, SIGN_UP } from '../../routes/routes';
import { goToRoute } from '../../routes/navigation';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value.toString() });
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  logUserIn = async () => {
    const { firebase } = this.props;
    const { email, password } = this.state;

    // dispatch loading action
    const isLoggedIn = await firebase.logInWithEmailAndPassword(email, password);
    
    if (isLoggedIn) {
      // set loading status to loaded
      goToRoute(COMMUNITY);
    } else {
      // set loading status to loaded
      console.log('login error');
      // dispatch login error
    }
  }

  render() {
    return (
        <div>
            <h1>Log In</h1>
            <div>
                <span>Please Login</span>
                <input
                    placeholder='email'
                    type='text'
                    onChange={this.setEmail}
                />
                <input
                    placeholder='password'
                    type='text'
                    onChange={this.setPassword}
                />
                <button onClick={this.logUserIn}>login</button>
            </div>
            <div>
              <p>Don't have an account?</p>
              <button onClick={() => goToRoute(SIGN_UP)}>
                Sign Up
              </button>
            </div>
        </div>
    );
  }
}

LogIn.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default LogIn;
