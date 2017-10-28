import { connect } from 'react-redux';
import CreateAccount from '../components/createAccount/CreateAccount';
import { currentUser, signedIn, toggleSignIn } from '../actions/actions';

const mapStateToProps = store => ({
  currentUser: store.currentUser,
  signedIn: store.signedIn
});

// const mapDispatchToProps = dispatch => ({
//   toggleSignIn: () => {
//     dispatch(toggleSignIn());
//   },
//
// });

export default connect(mapStateToProps, undefined)(CreateAccount);
