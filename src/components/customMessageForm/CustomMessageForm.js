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
        <h2 className="custom-form-heading">Message to (NAME)</h2>
        <textarea
          onChange={this.handleChange}
          className="custom-message-input"
          value={this.state.message} />
        <button
          className="send-custom-btn"
          onClick={() => this.props.sendCustom}
        >
          Send
        </button>
        <button
          className="never-mind-btn"
          onClick={() => this.props.neverMind()}
        >
          Never mind.
        </button>
      </div>
    )
  };
}

export default CustomMessageForm;
