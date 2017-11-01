import React from 'react';
import PropTypes from 'prop-types';

const ContactCards = ({ name, sendCustom }) => {
  return (
    <article className="contact-card">
      <h4 className="contact-card-name">{name}</h4>
      <button
        className="custom-text-btn"
        onClick={() => sendCustom('HI FRANCY', '5756441355')}>
        Send custom text
      </button>
      <button className="location-now-btn">Send my location NOW!!</button>
    </article>
  );
};


ContactCards.propTypes = {
  name: PropTypes.string,
  sendCustom: PropTypes.func,
};

export default ContactCards;
