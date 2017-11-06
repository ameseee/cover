import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sendCustom } from '../../utils/postToServer';

class CustomMessageForm extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      sent: false
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  handleSend = () => {
    sendCustom(this.state.message, '5756441355');
    this.setState({
      sent: true
    });
  }

  render() {
    const sentNotification = this.state.sent
      ? <div className="sent-icon-displayed sent-icon"></div>
      : <div className="sent-icon-hidden sent-icon"></div>;

    return (
      <div className="custom-message-form">
        <textarea
          className="custom-message-input"
          onChange={(event) => this.handleChange(event)}
          value={this.state.message}
        />
        <button
          className="close-form-btn"
          onClick={() => this.props.toggleCustomForm()}
        >
        </button>
        <article className="send-sent">
          <button
            className="send-custom-btn"
            onClick={() => this.handleSend()}
          >
            Send
          </button>
          {sentNotification}
        </article>
      </div>
    );
  }
}

CustomMessageForm.propTypes = {
  toggleCustomForm: PropTypes.func,
};

export default CustomMessageForm;
