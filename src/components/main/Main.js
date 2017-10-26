import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

  return (
    <div className="main">
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
              to="/signin"
              className="nav-item">
            Log Out
          </Link>
          </li>

        </ul>
      </nav>
      <main>
        <section className="emergency-section">
          <h3 className="emergency-title">Emergency</h3>
          <button className="emergency-btn">TEXT 911</button>
        </section>

        <section className="contacts-section">
          <h3 className="section-title">Contacts</h3>
          <article className="contact-card">
            <h4 className="contact-card-name">Cindy</h4>
            <button className="custom-text-btn">send custom text</button>
            <button className="location-now-btn">send my location NOW</button>
          </article>

          <article className="contact-card">
            <h4 className="contact-card-name">Tracey</h4>
            <button className="custom-text-btn">send custom text</button>
            <button className="location-now-btn">send my location NOW</button>
          </article>
          {/*  render the mapped this.props.cards here */}
        </section>
      </main>
    </div>
  );
};

export default Main;
