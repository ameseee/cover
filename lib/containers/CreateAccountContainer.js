import { connect } from 'react-redux';
import CreateAccount from '../components/createAccount/CreateAccount';

// const mapStateToProps = store => ({
//
// });

const mapDispatchToProps = dispatch => ({
  tryCreate: (newUserCredentials) => {
    dispatch(tryCreate(newUserCredentials));
  }
});

export default connect(undefined, mapDispatchToProps)(CreateAccount);
