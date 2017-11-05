import React from 'react';
import { Link } from 'react-router-dom';
//import '../../index.css';
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
          to="/main"
          className="drop-down-option"
        >
          Home
        </Link>
      </div>
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
  showHamburger: PropTypes.func,
};

export default MobileNav;
