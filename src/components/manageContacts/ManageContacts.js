import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from './../../firebase';
import fetchScopedUsers from './../../utils/fetchScopedUsers';

class ManageContacts extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactNumber: '',
      contacts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchScopedUsers = fetchScopedUsers.bind(this);
  }

  componentDidMount() {
    this.fetchScopedUsers(firebase);
  }

  handleSubmit(event) {
    event.preventDefault();
    const itemsRef = firebase.database().ref('contacts');

    const item = {
      contactName: this.state.contactName,
      contactNumber: this.state.contactNumber,
      userId: this.props.currentUser,
    };
    itemsRef.push(item);

    this.setState({
      contactName: '',
      contactNumber: '',
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleEdit() {
    console.log('in handle Edit');
    // open up a form so they can edit.
  }

  handleRemove(contact) {
    console.log(contact);
    //remove from firebase and store should update
    // const contactRef = firebase.database().ref(`contacts/${contact.userId}`);
    // contactRef.remove();

    const { loadedContacts } = this.props;
    const contactToDelete = loadedContacts.find(deleteContact => {
      console.log(deleteContact.contactNumber, contact.contactNumber);
      return deleteContact.contactNumber === contact.contactNumber;
    });
    this.props.removeContact(contactToDelete);
    console.log(loadedContacts);
    this.fetchScopedUsers(firebase);
  }
  //


  render() {
    const { loadedContacts } = this.props;

console.log(loadedContacts);
    const mappedContacts = loadedContacts.map((contact) => {
      return (
        <article
          key={contact.contactNumber}
          className="existing-contact-card"
        >
          <div>
            <h4 className="existing-contact-name">{contact.contactName}</h4>
            <p className="existing-contact-number">{contact.contactNumber}</p>
          </div>
          <button
            className="edit-contact-btn"
            onClick={this.handleEdit}>Edit</button>
          <button
            className="remove-contact-btn" onClick={() => this.handleRemove(contact)}
          >
            Remove
          </button>
        </article>
      );
    });

    return (
      <div className="manage-contacts-section">
        <h3 className="title">Manage Contacts</h3>
        <section className="current-contacts">
            <article>
              { mappedContacts }
            </article>
        </section>

        <section className="create-contact-form">
          <h3 className="title add">Add Contacts</h3>
          <form>
            <input
              className="new-contact-name"
              name="contactName"
              value={this.state.contactName}
              type="text"
              placeholder="Contact Name"
              onChange={this.handleChange}
            />
            <input
              className="new-contact-number"
              type="text"
              name="contactNumber"
              value={this.state.contactNumber}
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
            <button
              className="save-new-contact"
              onClick={this.handleSubmit}
            >
              Save Contact
            </button>
          </form>
        </section>
      </div>
    );
  }
}

ManageContacts.propTypes = {
  currentUser: PropTypes.string,
  loadContacts: PropTypes.func,
  loadedContacts: PropTypes.array,
  createNewContact: PropTypes.func,
  removeConact: PropTypes.func,
};

export default ManageContacts;
