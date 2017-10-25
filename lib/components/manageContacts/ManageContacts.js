import React, { Component } from 'react';

class ManageContacts extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactNumber: '',
    };
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
    console.log('handle submit');
  }

  handleSubmit= () => {
    console.log('handleClick');
    // add contact to db, re-render so they show up on a card.
  }

  handleEdit = () => {
    console.log('we are in handle Edit');
    // open up a form so they can edit.
  }

  handleRemove = () => {
    console.log('we are in handle remove');
    // delete contact from db, re-render so their card is removed
  }

  createContactCards() {
    // map over contacts and for each return:
    return (
      <article className="maange-contact-card">
        <h4>Name</h4>
        <p>Number</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleRemove}>Remove</button>
      </article>
    );
  }

  render() {
    return (
      <div>
        <section className="current-contacts">
            {this.createContactCards}
        </section>

        <section className="create-contacts">
          <form>
            <input
              type="text"
              placeholder="Contact Name"
              onChange={this.handleChange}></input>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={this.handleChange}></input>
            <input
              type="submit"
              onCLick={this.handleSubmit}>Save Contact</input>
          </form>
        </section>
      </div>
    );
  }
}

export default ManageContacts;
