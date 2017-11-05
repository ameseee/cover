import React, { Component } from 'react';
import PropTypes from 'prop-types';
import
CustomMessageFormContainer from '../../containers/CustomMessageFormContainer';
import { sendCustom } from '../../utils/postToServer';
//import geoTools from 'geo-tools';

class ContactCards extends Component {
  constructor() {
    super();
    this.state = {
      sendingCustom: false,
      location: '',
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = position.coords;

      this.setState({
        location: `${location.latitude}, ${location.longitude}`
      });
    });
  }

  toggleCustomForm = () => {
    this.setState({
      sendingCustom: !this.state.sendingCustom
    });
  }

  handleSend = () => {
    sendCustom(this.state.location, '5756441355');
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
          Send my location NOW!
        </button>
        {renderCustomForm}
      </article>
    );
  }
}

ContactCards.propTypes = {
  name: PropTypes.string,
  sendCustom: PropTypes.func,
};

export default ContactCards;
