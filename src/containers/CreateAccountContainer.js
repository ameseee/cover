import { connect } from 'react-redux';
import CreateAccount from '../components/createAccount/CreateAccount';
import {createAccountRequested} from '../actions/actions';

// const mapStateToProps = store => ({
//
// });

const mapDispatchToProps = dispatch => ({
  createAccountRequested: (newUserCredentials) => {
    dispatch(createAccountRequested(newUserCredentials));
  }
});

export default connect(undefined, mapDispatchToProps)(CreateAccount);
