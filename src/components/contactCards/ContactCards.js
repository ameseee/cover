import React, { Component } from 'react';
import PropTypes from 'prop-types';
import
CustomMessageFormContainer from '../../containers/CustomMessageFormContainer';
import { getLatLng } from '../../utils/location';
import geoTools from 'geo-tools';

class ContactCards extends Component {
  constructor() {
    super();
    this.state = {
      sendingCustom: false
    };
  }

  openCustomForm = () => {
    this.setState({
      sendingCustom: true
    });
  }

  closeCustomForm = () => {
    this.setState({
      sendingCustom: false
    });
  }

  getLocation() {
    getLatLng();
  }

  render() {
    const renderCustomForm =
      this.state.sendingCustom
        ? <CustomMessageFormContainer
          closeCustomForm={this.closeCustomForm}
        />
        : null;

    return (
      <article className="contact-card">
        <h4 className="contact-card-name">{this.props.name}</h4>
        <button
          className="custom-text-btn"
          onClick={() => this.openCustomForm()}>
          Send custom text
        </button>
        <button
          className="location-now-btn"
          onClick={() => this.getLocation()}
        >
          Send my location NOW!!
        </button>
        {renderCustomForm}
      </article>
    );
  }

}

ContactCards.propTypes = {
  name: PropTypes.string,
};

export default ContactCards;
