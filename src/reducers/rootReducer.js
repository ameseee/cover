import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getContactCards } from './mainReducer';
import { currentUser, signedInStatus } from './authenticationReducer';

const rootReducer = combineReducers({
  getContactCards,
  currentUser,
  signedInStatus
});

export default rootReducer;
