import { connect } from 'react-redux';
import ManageContacts from '../components/manageContacts/ManageContacts';
import { createNewContact, removeContact, loadContacts } from '../actions/actions';

const mapStateToProps = store => ({
  loadedContacts: store.loadContacts,
  currentUser: store.currentUser
});

const mapDispatchToProps = dispatch => ({
  createNewContact: contact => {
    dispatch(createNewContact(contact));
  },
  removeContact: contact => {
    dispatch(removeContact(contact));
  },
  loadContacts: contacts => {
    dispatch(loadContacts(contacts));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageContacts);
