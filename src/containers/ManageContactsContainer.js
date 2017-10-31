import { connect } from 'react-redux';
import ManageContacts from '../components/manageContacts/ManageContacts';
import { createNewContact, loadContacts, removeFromFB } from '../actions/actions';

const mapStateToProps = store => ({
  loadedContacts: store.loadContacts,
  currentUser: store.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createNewContact: contact => {
    dispatch(createNewContact(contact));
  },
  loadContacts: contacts => {
    dispatch(loadContacts(contacts));
  },
  removeFromFB: id => {
    dispatch(removeFromFB(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageContacts);
