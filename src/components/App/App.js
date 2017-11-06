import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../index.css';
import firebase from '../../firebase';
import { signOutFirebase } from '../../utils/fireBaseUtils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileNav: false
    };
  }

  signOut = () => {
    signOutFirebase(firebase);
    this.props.signOut(false);
    this.props.setCurrentUser('');
    this.props.history.push('/');
  }

  showMobileNav = () => {
    this.setState({ mobileNav: true });
    this.props.history.push('/nav');
  }

  render() {
    const { currentUser } = this.props;
    const signedIn = !currentUser
      ? null
      :
      <button
        className="sign-out"
        onClick={this.signOut}>
        <Link
          className="sign-out-link"
          to="/"
        >
          Sign Out
        </Link>
      </button>;

    return (
      <div className="app-container">
        <nav className="nav-bar">
          <h1 className="cover-title">
            <Link
              className="nav-bar-brand-link"
              to="/main"
            >
              Cover
            </Link>
          </h1>
          <ul className="nav-menu">
            <button
              className="hamburger"
              onClick={() => this.showMobileNav()}
            >
            </button>
            <li className="nav-item-li">
              <Link
                className="nav-item"
                to="/main"
              >
              Home
              </Link>
            </li>
            <li className="nav-item-li">
              <Link
                className="nav-item"
                to="/contacts"
              >
              Contacts
              </Link>
            </li>
            { signedIn }
          </ul>
        </nav>
        <button
          className="exit">
          <a
            className="google-link"
            href="https://weather.com/"
          >
            EXIT
          </a>
        </button>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.string,
  history: PropTypes.object,
  setCurrentUser: PropTypes.func,
  signOut: PropTypes.func,
};

export default App;
