import React, { Component } from 'react';
import styles from '../../index.css';
import { Link } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div className="app-container">

        <nav className="nav-bar">
          <h1 className="cover-title">Cover</h1>
          <ul className="nav-menu">
            <li className="nav-item-li">
              <Link
                to="/contacts"
                className="nav-item">
              Manage Contacts
            </Link>
            </li>

            <li className="nav-item-li">
              <Link
                to="/create"
                className="nav-item">
              Log Out
            </Link>
            </li>

          </ul>
        </nav>

      </div>
    );
  };
}

export default App;
