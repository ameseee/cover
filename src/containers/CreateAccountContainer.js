import { connect } from 'react-redux';
import CreateAccount from '../components/createAccount/CreateAccount';
import { currentUser } from '../actions/actions';

const mapStateToProps = store => ({
  currentUser: store.currentUser
});

// const mapDispatchToProps = dispatch => ({
//   newUser: (newUserCredentials) => {
//     dispatch(newUser(newUserCredentials));
//   },
//   signInNewUser: (newUserCredentials) => {
//     dispatch(signInNewUser(newUserCredentials));
//   }
// });

export default connect(mapStateToProps, undefined)(CreateAccount);
