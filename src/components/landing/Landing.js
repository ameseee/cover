import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h2>DATA STUFF</h2>
      <Link to="/auth"><h2>Sign In</h2></Link>
    </div>
  )
}

export default Landing;
