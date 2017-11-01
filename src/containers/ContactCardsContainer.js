import { connect } from 'react-redux';
import ContactCards from '../components/contactCards/ContactCards';
import { sendCustom } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  sendCustom: (message, phone) => {
    dispatch(sendCustom(message, phone));
  }
});

export default connect(undefined, mapDispatchToProps)(ContactCards);
