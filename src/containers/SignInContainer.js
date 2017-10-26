import { connect } from 'react-redux';
import SignIn from '../components/signIn/SignIn';

// const mapStateToProps = store => ({
//   cards: store.cards
// });

const mapDispatchToProps = dispatch => ({
  // trySignIn: (signInCredentials) => {
  //   dispatch(trySignIn(signInCredentials));
  // }
});

export default connect(undefined, mapDispatchToProps)(SignIn);
