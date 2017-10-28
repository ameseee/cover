import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import classnames from 'classnames'

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isSigningUp: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  createAccount = (newUser)  => Object.entries(newUser).map(([key,value]) => Object.assign({id: key}, value));

  componentDidMount() {
    console.log('props in create:', this.props);
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

  handleClick(event) {
    event.preventDefault();
    const userRef = firebase.database().ref('users');
    const users = {
      username: this.state.username,
      password: this.state.password,
      contacts: {}
    }
    userRef.push(users);
    //use an action to change if logged in
    this.clearState();
    this.props.history.push('/')
    console.log('this props at end of button click function', this.props);
  };

  clearState() {
    this.setState({
      username: '',
      password: '',
    });
  }

  switchToOtherForm = () => {
    this.setState({isSigningUp: !this.state.isSigningUp })
  }

  render() {
    return (
      <div className="authentication-section">
        <section className={classnames("create-account-section", this.state.isSigningUp ? '' : 'hidden')}>
          <h3 className="create-account-title">Create Your Account</h3>
          <form>
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
              onClick={this.handleClick}>
                Create Account
            </button>
          </form>
        </section>
        <section className={classnames("sign-in-section", this.state.isSigningUp ? 'hidden' : '')}>
          <h3 className="sign-in-title">Sign In</h3>
          <form>
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
              onClick={this.handleClick}>
              <Link
                to='/'
                className="link-to-main" >Sign In</Link>
            </button>
          </form>
        </section>
        <button onClick={this.switchToOtherForm}>{this.state.isSigningUp ? 'Switch to Login' : 'Switch to SignUp'}</button>
      </div>
    );
  }
}

export default CreateAccount;
