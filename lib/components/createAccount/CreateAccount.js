import React, { Component } from 'react';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(key, event) {
    console.log('key:', key, 'event.target.value:', event.target.value);
    this.setState({ [key]: event.target.value });
  }

  handleClick() {
    console.log('handleClick');
    // call an action to store this as a new user, and log them in.
  };

  render() {
    return (
        <div className="create-account-section">
          <h3 className="create-account-title">Create Your Account</h3>
          <form>
            <input
              className="create-account-name"
              type="text"
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"></input>
            <input
              className="create-account-password"
              type="text"
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"></input>
            <button
              className="create-account-btn"
              onClick={this.handleClick}>Create Account</button>
          </form>
        </div>
    );
  }
}

export default CreateAccount;
