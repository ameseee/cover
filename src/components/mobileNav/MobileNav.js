import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import PropTypes from 'prop-types';

const MobileNav = ({ history }) => {
  return (
    <section className="drop-down">

      <button
        className="go-back"
        onClick={() => history.goBack()}>
      </button>
      <div>
        <Link
          to="/main"
          className="drop-down-option"
        >
          Home
        </Link>
      </div>

      <div className="drop-down-option">About</div>

      <div>
        <Link
          to="/contacts"
          className="drop-down-option"
        >
          Contacts
        </Link>
      </div>

      <div>
        <Link
          to="/"
          className="drop-down-option"
        >
          Sign Out
        </Link>
      </div>

    </section>
  );
};

MobileNav.propTypes = {
  history: PropTypes.object,
};

export default MobileNav;
