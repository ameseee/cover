import React, { Component } from 'react';

class ManageContacts extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactNumber: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  });
}

  handleSubmit() {
    console.log('handleClick');
    // add contact to db, re-render so they show up on a card.
  }

  handleEdit() {
    console.log('we are in handle Edit');
    // open up a form so they can edit.
  }

  handleRemove() {
    console.log('we are in handle remove');
    // delete contact from db, re-render so their card is removed
  }

  createContactCards() {
    // map over contacts and for each return:
    return (
      <article className="maange-contact-card">
        {/* <h4>{contact.name}</h4>
        <p>{contact.number}</p> */}
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleRemove}>Remove</button>
      </article>
    );
  }

  render() {
    return (
      <div className="manage-contacts-section">
        <h3 className="title">Manage Contacts</h3>
        <section className="current-contacts">
            {/* {this.createContactCards} */}
            <article className="existing-contact-card">
              <div>
                <h4 className="existing-contact-name">Cindy</h4>
                <p className="existing-contact-number">303-555-1234</p>
              </div>
              <button
                className="edit-contact-btn"
                onClick={this.handleEdit}>Edit</button>
              <button
                className="remove-contact-btn" onClick={this.handleRemove}>Remove</button>
            </article>
            <article className="existing-contact-card">
              <div>
                <h4 className="existing-contact-name">Tracey</h4>
                <p className="existing-contact-number">303-555-2345</p>
              </div>
              <button
                className="edit-contact-btn"
                onClick={this.handleEdit}>Edit</button>
              <button
                className="remove-contact-btn" onClick={this.handleRemove}>Remove</button>
            </article>
        </section>

        <section className="create-contact-form">
          <h3 className="title">Add Contacts</h3>
          <form>
            <input
              className="new-contact-name"
              name="contactName"
              type="text"
              placeholder="Contact Name"
              onChange={this.handleChange}></input>
            <input
              className="new-contact-number"
              type="text"
              name="contactNumber"
              placeholder="Phone Number"
              onChange={this.handleChange}></input>
            <buttom
              className="save-new-contact"
              onClick={this.handleSubmit}>Save Contact</buttom>
          </form>
        </section>
      </div>
    );
  }
}

export default ManageContacts;
