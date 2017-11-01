import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import PropTypes from 'prop-types';
import firebase from '../../firebase';

class App extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase.auth().signOut().then( () => {
    }).catch( error => {
      alert('We experienced an error:', error);
    });
    this.props.signOut(false);
    this.props.setCurrentUser('');
  }

  render() {
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
              Manage Contacts
              </Link>
            </li>
            <li
              className="nav-item-li"
              onClick={this.signOut}>
              <Link
                className="nav-item"
                to="/"
              >
                Sign Out
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
}

App.propTypes = {
  signOut: PropTypes.func,
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.string,
};

export default App;
