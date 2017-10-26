import React, { Component } from 'react';

class SignIn extends Component {
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
    //this.props.trySignIn();
  };

  render() {
    return (
        <section className="sign-in-section">
          <h3 className="sign-in-title">Sign In</h3>
          <form>
            <input
              className="sign-in-name"
              type="text"
              onChange={this.handleChange.bind(this, 'username')}
              placeholder="Name/UserName" />
            <input
              className="sign-in-password"
              type="text"
              onChange={this.handleChange.bind(this, 'password')}
              placeholder="Password" />
            <button
              className="sign-in-btn"
              onClick={this.handleClick}>Sign In</button>
          </form>
        </section>
    );
  }
}

export default SignIn;
