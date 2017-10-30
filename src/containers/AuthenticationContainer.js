import { connect } from 'react-redux';
import Authentication from '../components/authentication/Authentication';
import { setCurrentUser, signIn, signOut, loadContacts } from '../actions/actions';

const mapStateToProps = store => {
  const { currentUser, signedInStatus, managedContacts } = store;

  return {
    currentUser,
    signedInStatus,
    managedContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  signIn: boolean => {
    dispatch(signIn(boolean));
  },
  signOut: boolean => {
    dispatch(signOut(boolean));
  },
  setCurrentUser: username => {
    dispatch(setCurrentUser(username));
  },
  loadContacts: contacts => {
    dispatch(loadContacts(contacts));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
