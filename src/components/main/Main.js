import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContactCardsContainer from '../../containers/ContactCardsContainer';
import { fetchScopedUsers } from './../../utils/fireBaseUtils';
import { sendCustom } from '../../utils/postToServer';
import firebase from './../../firebase';

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
        <ContactCardsContainer
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
          {`You don't have any contacts saved yet!`}
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
    const noContacts = !loadedContacts.length
      ? this.noContacts()
      : null;

    return (
      <div className="main">
        <h2 className="home-title">Home</h2>
        <main>
          <section className="emergency-section">
            <h3 className="emergency-title">Emergency</h3>
            <button
              className="emergency-btn"
              onClick={() => this.handleSend()}
            >
              TEXT 911
            </button>
          </section>
          <section className="hotline-section">
            <h3 className="hotline-title">
              National Domestic Violence Hotline
            </h3>
            <a className="hotline-link" target="_blank" href="http://www.thehotline.org/">
              <button className="hotline-btn">Hotline</button>
            </a>
          </section>
          <section className="contacts-section">
            <h3 className="section-title">Contacts</h3>
            { this.loadContacts() }
            { noContacts }
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
