import { connect } from 'react-redux';
import ManageContacts from '../components/manageContacts/ManageContacts';

const mapStateToProps = store => ({
  contacts: store.contacts
});

const mapDispatchToProps = dispatch => ({
  createNewContact: (contact) => {
    dispatch(createNewContact(contact));
  }
  removeContact: (contact) => {
    dispatch(removeContact(contact));
  }
});

export default connect(undefined, mapDispatchToProps)(ManageContacts);
