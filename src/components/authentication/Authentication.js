import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from '../../firebase';

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      newUser: false,
    };
  }

  createAccount = (newUser) => {
    Object.entries(newUser).map(([key, value]) => {
      Object.assign({id: key}, value);
    });
  }

  componentDidMount() {
    const createRef = firebase.database().ref('users');

    createRef.on('value', (snapshot) => {
      const newUser = snapshot.val();

      if (newUser) this.createAccount(newUser);
    });
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  createAccountClick = (email, password) => {
    this.clearState();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(login => {
        this.props.setCurrentUser(login.uid);
        this.props.signIn(true);
        this.props.history.push('/main');
      })
      .catch( error => {
        throw new Error(error);
      });
  };

  signInClick = (email, password) => {
    this.clearState();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(login => {
        this.props.setCurrentUser(login.uid);
        this.props.signIn(true);
        this.props.history.push('/main');
      })
      .catch(error => {
        this.props.history.push('/auth');
        alert(error);
      });
  };

  clearState() {
    this.setState({
      username: '',
      password: '',
    });
  }

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
              className="name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
            />
            <input
              className="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
            />
            <button
              className="btn"
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
              className="name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
            />
            <input
              className="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
            />
            <button
              className="btn"
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
            className="other-card-btn" onClick={this.switchToOtherForm}
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
  setCurrentUser: PropTypes.func,
  signIn: PropTypes.func,
  history: PropTypes.object,
};

export default Authentication;
