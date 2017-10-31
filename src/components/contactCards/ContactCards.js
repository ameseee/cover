import React from 'react';
import PropTypes from 'prop-types';

const ContactCards = ({name, number, edit, remove, key}) => {

  return (
    <article className="existing-contact-card">HELLLOo
      {/* <div>
        <h4 className="existing-contact-name">{name}</h4>
        <p className="existing-contact-number">{number}</p>
      </div>
      <button
        className="edit-contact-btn"
        onClick={edit}>Edit</button>
        <button
          className="remove-contact-btn" onClick={() => remove(key)}>Remove</button> */}
    </article>
  );
};

ContactCards.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  edit: PropTypes.func,
  remove: PropTypes.func,
};

export default ContactCards;
