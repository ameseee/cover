import React from 'react';
import fetchScopedUsers from './../../utils/fetchScopedUsers';
import firebase from './../../firebase';
// import ContactCards from '../contactCards/ContactCards';
class Main extends React.Component {
  constructor() {
    super();

    this.fetchScopedUsers = fetchScopedUsers.bind(this);
  }

  componentDidMount() {
    this.fetchScopedUsers(firebase);
  }

  loadContacts() {
    return this.props.loadedContacts.map((contact, index) => {
      return (
        <article
          key={index}
          className="contact-card"
        >
          <h4 className="contact-card-name">{contact.contactName}</h4>
          <button className="custom-text-btn">Send custom text</button>
          <button className="location-now-btn">Send my location NOW!!</button>
        </article>
      );
    });
  }

  render() {
    return (
      <div className="main">
        <main>
          <section className="emergency-section">
            <h3 className="emergency-title">Emergency</h3>
            <button className="emergency-btn">TEXT 911</button>
          </section>

          <section className="contacts-section">
            <h3 className="section-title">Contacts</h3>
            {this.loadContacts()}
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
