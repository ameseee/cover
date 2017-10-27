import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  createAccount = (newUser)  => Object.entries(newUser).map(([key,value]) => Object.assign({id: key}, value));

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

  handleClick(event) {
    event.preventDefault();
    const userRef = firebase.database().ref('users');
    const users = {
      username: this.state.username,
      password: this.state.password,
      contacts: {}
    }
    userRef.push(users);
    this.props.newUser(this.state);
    this.props.signInNewUser(this.state);
    this.setState({
      username: '',
      password: '',
    });

  };

  render() {
    return (
        <div className="create-account-section">
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
              <Link
                to='/'
                className="link-to-main" >Create Account</Link>
            </button>
          </form>
        </div>
    );
  }
}

export default CreateAccount;
