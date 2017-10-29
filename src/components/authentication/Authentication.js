import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isSigningUp: true,
    };
  }

  createAccount = (newUser) => Object.entries(newUser).map(([key,value]) => Object.assign({id: key}, value));

  componentDidMount() {
    // put this in an action
    const createRef = firebase.database().ref('users');
    createRef.on('value', (snapshot) => {
      const newUser = snapshot.val();
      let newState = newUser ? this.createAccount(newUser) : [];
    // put this in an action
    });
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  createAccountClick = (email, password) => {
    // event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch( error => {
        const errorCode = error.code;
        const errorMsg = error.message;
      })
    // const userRef = firebase.database().ref('users');
    // const users = {
    //   username: this.state.username,
    //   password: this.state.password,
    //   contacts: {}
    // }
    // userRef.push(users);
    this.props.signIn(true);
    this.props.setCurrentUser(this.state.username);
    this.clearState();
    this.props.history.push('/');
  };

  signInClick = (email, password) => {
    console.log('we have what we want here!!', email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => alert(error))
      // const userRef = firebase.database().ref('users');
    // const users = {
    //   username: this.state.username,
    //   password: this.state.password,
    //   contacts: {}
    // }
    // userRef.push(users);
    this.props.signIn(true);
    this.props.setCurrentUser(this.state.username);
    this.clearState();
    this.props.history.push('/');
  };

  clearState() {
    this.setState({
      username: '',
      password: '',
    });
  }

  switchToOtherForm = () => {
    this.setState({ isSigningUp: !this.state.isSigningUp })
  }

  render() {
    return (
      <div className="authentication-section">
        <section className={classnames("create-account-section", this.state.isSigningUp ? '' : 'hidden')}>
          <h3 className="create-account-title">Create Your Account</h3>
          <div>
            <input
              className="create-account-name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"></input>
            <input
              className="create-account-password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"></input>
            <button
              className="create-account-btn"
              onClick={() => this.createAccountClick(this.state.username, this.state.password)}>
                Create Account
            </button>
          </div>
        </section>
        <section className={classnames("sign-in-section", this.state.isSigningUp ? 'hidden' : '')}>
          <h3 className="sign-in-title">Sign In</h3>
          <div>
            <input
              className="sign-in-name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName" />
            <input
              className="sign-in-password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password" />
            <button
              className="sign-in-btn"
              onClick={() => this.signInClick(this.state.username, this.state.password)}>
              <Link
                to='/'
                className="link-to-main" >Sign In</Link>
            </button>
          </div>
        </section>
        <article className="other-card-section">
          <h3 className="already" >{this.state.isSigningUp ? 'Already have an account?' : 'Don\'t have an accout yet?'}</h3>
          <button
            className="other-card-btn" onClick={this.switchToOtherForm}>{this.state.isSigningUp ? 'Sign In' : 'Sign Up'}</button>
        </article>
      </div>
    );
  }
}

export default Authentication;
