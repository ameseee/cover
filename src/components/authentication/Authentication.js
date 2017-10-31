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

  createAccount = (newUser) => Object.entries(newUser).map(([key,value]) => Object.assign({id: key}, value));

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
        throw new Error(error)
      });
  };

  signInClick = (email, password) => {
    this.clearState();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(login => {
        this.props.setCurrentUser(login.uid)
        this.props.signIn(true)
        this.props.history.push('/main');
      })
      .catch(error => {
        this.props.history.push('/auth');
        alert(error)
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
        <section className={classnames('create-account-section', this.state.newUser ? '' : 'hidden')}>
          <h3 className="create-account-title">Create Your Account</h3>
          <div>
            <input
              className="create-account-name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
            />
            <input
              className="create-account-password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
            />
            <button
              className="create-account-btn"
              onClick={() => this.createAccountClick(this.state.username, this.state.password)}
            >
              Create Account
            </button>
          </div>
        </section>
        <section className={classnames('sign-in-section', this.state.newUser ? 'hidden' : '')}>
          <h3 className="sign-in-title">Sign In</h3>
          <div>
            <input
              className="sign-in-name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"
            />
            <input
              className="sign-in-password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"
            />
            <button
              className="sign-in-btn"
              onClick={() => this.signInClick(this.state.username, this.state.password)}>
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
          <h3 className="already" >{this.state.newUser ? 'Already have an account?' : 'Don\'t have an accout yet?'}</h3>
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
  loadContacts: PropTypes.func,
  managedContacts: PropTypes.array,
  setCurrentUser: PropTypes.func,
  signIn: PropTypes.func,
  signOut: PropTypes.func,
};

export default Authentication;
