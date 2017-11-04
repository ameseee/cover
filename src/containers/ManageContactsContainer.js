import { connect } from 'react-redux';
import ManageContacts from '../components/manageContacts/ManageContacts';
import { loadContacts } from '../actions/actions';

const mapStateToProps = store => ({
  loadedContacts: store.loadContacts,
  currentUser: store.currentUser,
});

const mapDispatchToProps = dispatch => ({
  loadContacts: contacts => {
    dispatch(loadContacts(contacts));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageContacts);
