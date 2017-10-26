import React, { Component } from 'react';
import firebase from '../../firebase';

class ManageContacts extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactNumber: '',
      contacts: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('contacts');
    itemsRef.on('value', (snapshot) => {
      let contacts = snapshot.val();
      let newState = [];
      for (let contact in contacts) {
        newState.push({
          id: contact,
          contactName: contacts[contact].contactName,
          contactNumber: contacts[contact].contactNumber
        });
      }
      this.setState({
        contacts: newState
      });
    });
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

  handleRemove(contact) {
    console.log('we are in handle remove', contact.id);
    const itemRef = firebase.database().ref(`/contacts/${contact.id}`);
    itemRef.remove();
    // delete contact from db, re-render so their card is removed
  }

  createContactCards() {
    // map over contacts and for each return:
    return (
      <article className="manage-contact-card">
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
            <article className="existing-contact-card">
              {this.state.contacts.map(contact => {
                return (
                  <article>
                  <div>
                    <h4 className="existing-contact-name">{contact.contactName}</h4>
                    <p className="existing-contact-number">{contact.contactNumber}</p>
                  </div>
                  <button
                    className="edit-contact-btn"
                    onClick={this.handleEdit}>Edit</button>
                    <button
                      className="remove-contact-btn" onClick={() => this.handleRemove(contact)}>Remove</button>
                  </article>
                )
              })}
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
