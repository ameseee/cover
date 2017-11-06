import React, { Component } from 'react';
import PropTypes from 'prop-types';
import
CustomMessageFormContainer from '../../containers/CustomMessageFormContainer';
import { sendCustom } from '../../utils/postToServer';

class ContactCards extends Component {
  constructor() {
    super();
    this.state = {
      sendingCustom: false,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      this.props.storeLocation(
        `${coords.latitude}, ${coords.longitude}`);
    });
  }

  toggleCustomForm = () => {
    this.setState({
      sendingCustom: !this.state.sendingCustom
    });
  }

  handleSend = () => {
    sendCustom(this.props.location, '5756441355');
  }

  render() {
    const renderCustomForm =
      this.state.sendingCustom
        ? <CustomMessageFormContainer
          toggleCustomForm={this.toggleCustomForm}
        />
        : null;

    return (
      <article className="contact-card">
        <h4 className="contact-card-name">{this.props.name}</h4>
        <button
          className="custom-text-btn"
          onClick={() => this.toggleCustomForm()}>
          Send custom text
        </button>
        <button
          className="location-now-btn"
          onClick={() => this.handleSend()}
        >
          Send my location
        </button>
        {renderCustomForm}
      </article>
    );
  }
}

ContactCards.propTypes = {
  location: PropTypes.string,
  name: PropTypes.string,
  sendCustom: PropTypes.func,
  storeLocation: PropTypes.func,
};

export default ContactCards;
