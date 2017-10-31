import React, { Component } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class App extends Component {
  constructor() {
    super();
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    console.log('sign out props1:', this.props);
    firebase.auth().signOut().then( () => {
      //signout successful - this is prob where I should call props
    }).catch( error => {
      alert('We experienced an error:', error)
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
                to="/auth"
              >
                Sign Out
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    );
  };
}

export default App;
