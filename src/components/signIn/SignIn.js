import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

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
    this.setState({ [key]: event.target.value });
  }

  signInUser = (newUser)  => Object.entries(newUser).map(([key,value]) => Object.assign({id: key}, value));

  componentDidMount() {
    // put this in an action
    const createRef = firebase.database().ref('users');
    createRef.on('value', (snapshot) => {
      const currentUser = snapshot.val();
      let newState = currentUser ? this.signInUser(currentUser) : [];
    // put this in an action
    });
  }

  handleClick(event) {
    event.preventDefault();
    const userRef = firebase.database().ref('users');
    const users = {
      username: this.state.username,
      password: this.state.password,
      currentUser: true,
      contacts: {}
    }
    userRef.push(users);
    // this.props.newUser(this.state);
    // this.props.signInNewUser(this.state);
    this.setState({
      username: '',
      password: '',
    });

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
              onClick={this.handleClick}>
              <Link
                to='/'
                className="link-to-main" >Sign In</Link>
              </button>
          </form>
        </section>
    );
  }
}

export default SignIn;
