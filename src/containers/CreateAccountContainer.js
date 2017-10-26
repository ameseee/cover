import { connect } from 'react-redux';
import CreateAccount from '../components/createAccount/CreateAccount';
import { signInNewUser, newUser } from '../actions/actions';

// const mapStateToProps = store => ({
//
// });

const mapDispatchToProps = dispatch => ({
  newUser: (newUserCredentials) => {
    dispatch(newUser(newUserCredentials));
  },
  signInNewUser: (newUserCredentials) => {
    dispatch(signInNewUser(newUserCredentials));
  }
});

export default connect(undefined, mapDispatchToProps)(CreateAccount);
