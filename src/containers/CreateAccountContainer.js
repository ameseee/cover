import { connect } from 'react-redux';
import CreateAccount from '../components/createAccount/CreateAccount';
import { setCurrentUser, signIn, signOut } from '../actions/actions';

const mapStateToProps = store => ({
  currentUser: store.currentUser,
  signedInStatus: store.signedInStatus
});

const mapDispatchToProps = dispatch => ({
  signIn: boolean => {
    dispatch(signIn(boolean))
  },
  signOut: boolean => {
    dispatch(signOut(boolean))
  },
  setCurrentUser: username => {
    dispatch(setCurrentUser(username))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
