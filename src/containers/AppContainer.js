import { connect } from 'react-redux';
import App from '../components/App/App';
import { signOut, setCurrentUser } from '../actions/actions';

const mapStateToProps = store => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: boolean => {
    dispatch(signOut(boolean))
  },
  setCurrentUser: username => {
    dispatch(setCurrentUser(username))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
