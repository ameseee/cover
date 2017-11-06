import React from 'react';
import { Link } from 'react-router-dom';
import { fetchScopedUsers } from './../../utils/fetchScopedUsers';
import PropTypes from 'prop-types';
import firebase from './../../firebase';
import ContactCards from '../../components/contactCards/ContactCards';
import { sendCustom } from '../../utils/postToServer';

class Main extends React.Component {
  constructor() {
    super();
    this.fetchScopedUsers = fetchScopedUsers.bind(this);
  }

  componentDidMount() {
    this.fetchScopedUsers(firebase);
  }

  handleSend = () => {
    sendCustom('911', '5756441355');
  }

  loadContacts = () => {
    const { loadedContacts } = this.props;

    return loadedContacts.map((contact, index) => {
      return (
        <ContactCards
          key={index}
          name={contact.contactName}
        />
      );
    });
  }

  noContacts() {
    return (
      <article className="no-contacts-card">
        <h4
          className="no-contacts-text">
          {"You don't have any contacts saved yet!"}
        </h4>
        <button className="add-contacts-btn">
          <Link
            className="add-contacts-link"
            to="/contacts"
          >
            Add Contacts
          </Link>
        </button>
      </article>
    );
  }

  render() {
    const { loadedContacts } = this.props;
    return (
      <div className="main">
        <main>
          <section className="emergency-section">
            <h3 className="emergency-title">Emergency</h3>
            <button
              className="emergency-btn"
              onClick={() => this.handleSend()}>TEXT 911</button>
          </section>
          <section className="hotline-section">
            <h3 className="hotline-title">NDV Hotline</h3>
            <button className="hotline-btn">Call Hotline</button>
          </section>
          <section className="contacts-section">
            <h3 className="section-title">Contacts</h3>
            { this.loadContacts() }
            { loadedContacts.length < 1
              ? this.noContacts()
              : null }
          </section>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  currentUser: PropTypes.string,
  loadContacts: PropTypes.func,
  loadedContacts: PropTypes.array,
};

export default Main;
