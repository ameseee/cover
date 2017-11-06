import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import '../../index.css';
import PropTypes from 'prop-types';
import firebase from '../../firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileNav: false
    };
  }

  signOut = () => {
    firebase.auth().signOut().then( () => {
    }).catch( error => {
      alert('We experienced an error:', error);
    });
    this.props.signOut(false);
    this.props.setCurrentUser('');
  }

  hideHamburger = () => {
    this.setState({ mobileNav: true });
    this.props.history.push('/nav');
  }

  showHamburger = () => {
    this.setState({ mobileNav: false });
  }

  render() {
    const { currentUser } = this.props;
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
              onClick={() => this.hideHamburger()}
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
            {
              currentUser === ''
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
                </button>
            }
          </ul>
        </nav>
        <button
          className="exit">
          <a
            href="https://weather.com/"
            className="google-link">EXIT</a>
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
