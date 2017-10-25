import React, { Component } from 'react';

class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(key, event) {
    console.log('key:', key, 'event.target.value:', event.target.value);
    this.setState({ [key]: event.target.value });
  }

  handleClick = () => {
    console.log('handleClick');
    // call an action to store this as a new user, and log them in.
  };

  render() {
    return (
        <div>
          <form>
            <input
              type="text"
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName"></input>
            <input
              type="text"
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password"></input>
            <input
              type="submit"
              onClick={this.handleClick}>Create My Account</input>
          </form>
        </div>
    );
  }
}

export default CreateAccount;
