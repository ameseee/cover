import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getContactCards } from './mainReducer';
import { currentUser } from './signInReducer';
import { newUser } from './createAccountReducer';


const rootReducer = combineReducers({
  getContactCards,
  currentUser,
  newUser
});

export default rootReducer;
