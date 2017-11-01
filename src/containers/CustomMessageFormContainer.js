import { connect } from 'react-redux';
import CustomMessageForm from '../components/customMessageForm/CustomMessageForm';
import { loadContacts } from '../actions/actions';

const mapStateToProps = store => ({
  contacts: store.loadContacts
});

export default connect(mapStateToProps, undefined)(CustomMessageForm);
