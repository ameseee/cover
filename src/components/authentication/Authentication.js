import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import firebase from '../../firebase';
import { createAccount, signIn } from '../../utils/fireBaseUtils';

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      newUser: false,
    };
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  createAccountClick = (email, password) => {
    this.setState({ username: '', password: '' });
    createAccount(email, password, firebase, this.props);
  };

  signInClick = (email, password) => {
    this.setState({ username: '', password: '' });
    signIn(email, password, firebase, this.props);
  };

  switchToOtherForm = () => {
    this.setState({ newUser: !this.state.newUser });
  }

  render() {
    return (
      <div className="authentication-section">
        <section
          className={classnames(
            'create-account-section', this.state.newUser ? '' : 'hidden')}
        >
          <h3 className="create-account-title">Create Your Account</h3>
          <div>
            <input
              className="sign-up-name name"
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
              type="text"
              value={this.state.username}
            />
            <input
              className="sign-up-password password"
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
              type="password"
              value={this.state.password}
            />
            <button
              className="sign-up-btn btn"
              onClick={() => this.createAccountClick(
                this.state.username,
                this.state.password)}
            >
              Create Account
            </button>
          </div>
        </section>
        <section
          className={classnames(
            'sign-in-section',
            this.state.newUser ? 'hidden' : '')}
        >
          <h3 className="sign-in-title">Sign In</h3>
          <div>
            <input
              className="sign-in-name name"
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
              type="text"
              value={this.state.username}
            />
            <input
              className="sign-in-password password"
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
              type="password"
              value={this.state.password}
            />
            <button
              className="sign-in-btn btn"
              onClick={() => this.signInClick(
                this.state.username,
                this.state.password)}>
              <Link
                to='/'
                className="link-to-main"
              >
                Sign In
              </Link>
            </button>
          </div>
        </section>
        <article className="other-card-section">
          <h4
            className="already">{
              this.state.newUser
                ? 'Already have an account?'
                : 'Don\'t have an accout yet?'}
          </h4>
          <button
            className="other-card-btn"
            onClick={this.switchToOtherForm}
          >
            {this.state.newUser ? 'Sign In' : 'Sign Up'}
          </button>
        </article>
      </div>
    );
  }
}

Authentication.propTypes = {
  currentUser: PropTypes.string,
  history: PropTypes.object,
  setCurrentUser: PropTypes.func,
  signIn: PropTypes.func,
};

export default Authentication;
