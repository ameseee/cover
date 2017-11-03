import React, { Component } from 'react';
import classnames from 'classnames';
import { Link, Route } from 'react-router-dom';
import MobileNav from '../mobileNav/MobileNav';
import '../../index.css';
import PropTypes from 'prop-types';
import firebase from '../../firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileNav: false
    };
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

  hideHamburger = () => {
    this.setState({ mobileNav: true });
    this.props.history.push('/nav');
  }

  //how do i pass this function to mobilenav component???
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
              // className={classnames(
              //   this.state.mobileNav
              //     ? 'hidden'
              //     : 'hamburger')}
              // onClick={() => this.hideHamburger()}
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
            <li className="nav-item-li nav-item">
              {/* <Link
                className="nav-item"
                to="/about"
              > */}
              About
              {/* </Link> */}
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
            }
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
  history: PropTypes.object,
};

export default App;
