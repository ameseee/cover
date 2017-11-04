import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  handleSend() {
    this.props.sendCustom(this.state.message, '5756441355');
    //i need to verify the next has actually been sent before doing this :
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
          onChange={(event) => this.handleChange(event)}
          className="custom-message-input"
          value={this.state.message}
        />
        <button
          className="close-form-btn"
          onClick={() => this.props.closeCustomForm()}
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
  sendCustom: PropTypes.func,
  closeCustomForm: PropTypes.func,
};


export default CustomMessageForm;
