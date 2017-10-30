import { connect } from 'react-redux';
import Main from '../components/main/Main';
import { loadContacts } from '../actions/actions';

const mapStateToProps = store => ({
  cards: store.cards,
  loadedContacts: store.loadContacts,
  currentUser: store.currentUser,
});

const mapDispatchToProps = dispatch => ({
  loadContacts: contacts => {
    dispatch(loadContacts(contacts));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
