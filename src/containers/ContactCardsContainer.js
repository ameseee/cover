import { connect } from 'react-redux';
import { storeLocation } from '../actions/actions';
import
ContactCards from '../components/contactCards/ContactCards';

const mapStateToProps = store => ({
  location: store.location,
});

const mapDispatchToProps = dispatch => ({
  storeLocation: boolean => {
    dispatch(storeLocation(boolean));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactCards);
