import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { getContactCards } from './mainReducer';
import { currentUser, signedInStatus } from './authenticationReducer';
import { createNewContact, removeContact, loadContacts } from './manageContactsReducer';

const rootReducer = combineReducers({
  getContactCards,
  currentUser,
  signedInStatus,
  createNewContact,
  removeContact,
  loadContacts,
});

export default rootReducer;
