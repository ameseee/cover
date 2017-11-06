import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MobileNav = ({ history }) => {

  const closeMobileNav = () => {
    history.goBack();
  };

  return (
    <section className="drop-down">
      <button
        className="go-back"
        onClick={() => closeMobileNav()}>
      </button>
      <div>
        <Link
          className="drop-down-option"
          to="/main"
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          className="drop-down-option"
          to="/contacts"
        >
          Contacts
        </Link>
      </div>
      <div>
        <Link
          className="drop-down-option"
          to="/"
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
