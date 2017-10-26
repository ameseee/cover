import { connect } from 'react-redux';
import Main from '../components/main/Main';

const mapStateToProps = store => ({
  cards: store.cards
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(mapStateToProps, undefined)(Main);
