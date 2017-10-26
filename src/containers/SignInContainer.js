import { connect } from 'react-redux';
import SignIn from '../components/signIn/SignIn';
import { currentUser } from '../actions/actions';
// const mapStateToProps = store => ({
//   cards: store.cards
// });

const mapDispatchToProps = dispatch => ({
  currentUser: (signInCredentials) => {
    dispatch(currentUser(signInCredentials));
  }
});

export default connect(undefined, mapDispatchToProps)(SignIn);
