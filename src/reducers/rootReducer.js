import { combineReducers } from 'redux';
import { currentUser, signedInStatus } from './authenticationReducer';
import { loadContacts } from './manageContactsReducer';
import { location } from './contactCardsReducer';

const rootReducer = combineReducers({
  currentUser,
  signedInStatus,
  loadContacts,
  location,
});

export default rootReducer;
