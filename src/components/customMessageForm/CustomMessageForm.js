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
        <textarea
          onChange={this.handleChange}
          className="custom-message-input"
        />
          <button
            className="never-mind-btn"
            onClick={() => this.props.neverMind()}
          >
            X
          </button>
          <button
            className="send-custom-btn"
            onClick={() => this.props.sendCustom}
          >
            Send
          </button>
      </div>
    )
  };
}

export default CustomMessageForm;
