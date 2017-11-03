import { connect } from 'react-redux';
import CustomMessageForm from '../components/customMessageForm/CustomMessageForm';
import { loadContacts, sendCustom } from '../actions/actions';

const mapStateToProps = store => ({
  contacts: store.loadContacts
});

const mapDispatchToProps = dispatch => ({
  sendCustom: (message, phone) => {
    dispatch(sendCustom(message, phone));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomMessageForm);
