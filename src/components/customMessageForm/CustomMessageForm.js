import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomMessageForm extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  handleChange = () => {
    console.log('handle change');
  }

  render() {
    return (
      <div className="custom-message-form">
        <h2>Message to (NAME)</h2>
        <textarea
          onChange={this.handleChange}
          className="custom-message-input"
          value={this.state.message} />
        <button
          onClick={() => this.props.sendCustom}
        >
          Send
        </button>
        <button>Never mind.</button>
      </div>
    )
  };
}

export default CustomMessageForm;
