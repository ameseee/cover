import React, { Component } from 'react';
import PropTypes from 'prop-types';
import
CustomMessageFormContainer from '../../containers/CustomMessageFormContainer';
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

  locationSuccess(pos) {
    var crd = pos.coords;

    console.log(`Your current position is: Lat: ${crd.latitude}, Lng: ${crd.longitude}, More or less ${crd.accuracy} meters.`);
  }

  locationError(error) {
    alert(`ERROR(${error.code}): ${error.message}`);
  }

  getLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      this.locationSuccess,
      this.locationError,
      options
    );
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
