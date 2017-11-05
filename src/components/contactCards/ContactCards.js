import React, { Component } from 'react';
import PropTypes from 'prop-types';
import
CustomMessageFormContainer from '../../containers/CustomMessageFormContainer';
import { getLatLng } from '../../utils/location';
//import geoTools from 'geo-tools';

class ContactCards extends Component {
  constructor() {
    super();
    this.state = {
      sendingCustom: false,
      location: '',
    };
  }

  toggleCustomForm = () => {
    this.setState({
      sendingCustom: !this.state.sendingCustom
    });
  }

  shouldComponentUpdate(nextState) {
    if (nextState !== this.state) return true;
  }

  componentDidMount() {
    const location = getLatLng();
    setTimeout(() => {
      this.setState({location: location});
    }, 5000);
  }

  handleSend() {
    // console.log(this.state.location);
    this.props.sendCustom(this.state.location, '5756441355');
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
