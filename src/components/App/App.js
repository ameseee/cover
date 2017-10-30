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
              to="/"
            >
              Cover
            </Link>
          </h1>
          <ul className="nav-menu">
            <li className="nav-item-li">
              <Link
                to="/contacts"
                className="nav-item">
              Manage Contacts
            </Link>
            </li>

            <li
              className="nav-item-li"
              onClick={this.signOut}>
              <Link
                to="/auth"
                className="nav-item">
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
