import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  fetchScopedUsers,
  removeContact
} from './../../utils/fireBaseUtils';
import firebase from './../../firebase';

class ManageContacts extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactNumber: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchScopedUsers = fetchScopedUsers.bind(this);
    this.removeContact = removeContact.bind(this);
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleRemove(contact) {
    this.removeContact(contact, firebase);
  }

  render() {
    const { loadedContacts } = this.props;

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
            className="remove-contact-btn"
            onClick={() => this.handleRemove(contact)}
          >
            Remove
          </button>
        </article>
      );
    });

    return (
      <div className="manage-contacts-section">
        <h3 className="section-title">Manage Contacts</h3>
        <section className="current-contacts">
          <article className="all-contacts">
            { mappedContacts }
          </article>
        </section>

        <section className="create-contact-form">
          <h3 className="title add">Add Contacts</h3>
          <form>
            <input
              className="new-contact-name"
              name="contactName"
              onChange={this.handleChange}
              placeholder="Contact Name"
              type="text"
              value={this.state.contactName}
            />
            <input
              className="new-contact-number"
              name="contactNumber"
              onChange={this.handleChange}
              placeholder="Phone Number"
              type="text"
              value={this.state.contactNumber}
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
  removeContact: PropTypes.func,
};

export default ManageContacts;
