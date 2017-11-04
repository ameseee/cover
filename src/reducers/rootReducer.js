import { combineReducers } from 'redux';
import { currentUser, signedInStatus } from './authenticationReducer';
import {
  createNewContact,
  removeContact,
  loadContacts
} from './manageContactsReducer';

const rootReducer = combineReducers({
  currentUser,
  signedInStatus,
  createNewContact,
  removeContact,
  loadContacts,
});

export default rootReducer;
