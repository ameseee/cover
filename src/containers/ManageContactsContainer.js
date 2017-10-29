import { connect } from 'react-redux';
import ManageContacts from '../components/manageContacts/ManageContacts';
import { createNewContact, removeContact } from '../actions/actions';

const mapStateToProps = store => ({
  // contacts: store.contacts,
  currentUser: store.currentUser
});

const mapDispatchToProps = dispatch => ({
  createNewContact: contact => {
    dispatch(createNewContact(contact));
  },
  removeContact: contact => {
    dispatch(removeContact(contact));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageContacts);
