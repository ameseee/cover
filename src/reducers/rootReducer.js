import { combineReducers } from 'redux';
import { currentUser, signedInStatus } from './authenticationReducer';
import { loadContacts } from './manageContactsReducer';

const rootReducer = combineReducers({
  currentUser,
  signedInStatus,
  loadContacts,
});

export default rootReducer;
