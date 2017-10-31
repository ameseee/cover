import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <h2 className="data-stuff">DATA STUFF</h2>
      <button
        className="enter-site-btn"
      >
        <Link
          className="enter-site-link"
          to="/auth"
        >
          Sign In
        </Link>
      </button>
    </div>
  );
};

export default Landing;
