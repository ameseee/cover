import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomMessageForm extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="custom-message-form">
        <textarea
          onChange={(event) => this.handleChange(event)}
          className="custom-message-input"
          value={this.state.message}
        />
          <button
            className="never-mind-btn"
            onClick={() => this.props.neverMind()}
          >
            X
          </button>
          <button
            className="send-custom-btn"
            onClick={() => this.props.sendCustom(this.state.message, '5756441355')}
          >
            Send
          </button>
      </div>
    )
  };
}

export default CustomMessageForm;
