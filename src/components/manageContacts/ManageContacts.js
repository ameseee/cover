import React, { Component } from 'react';
import firebase from '../../firebase';

class ManageContacts extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactNumber: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  });
}

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('contacts');
    const item = {
      contactName: this.state.contactName,
      contactNumber: this.state.contactNumber
    }
    itemsRef.push(item);
    this.setState({
      contactName: '',
      contactNumber: ''
    });
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
              value={this.state.contactName}
              type="text"
              placeholder="Contact Name"
              onChange={this.handleChange}></input>
            <input
              className="new-contact-number"
              type="text"
              name="contactNumber"
              value={this.state.contactNumber}
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
