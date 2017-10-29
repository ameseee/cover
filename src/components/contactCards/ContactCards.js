import React from 'react';

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

export default ContactCards;
