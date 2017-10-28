import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getContactCards } from './mainReducer';
import { currentUser } from './createAccountReducer';
import { signedIn } from './createAccountReducer';


const rootReducer = combineReducers({
  getContactCards,
  currentUser,
  signedIn
});

export default rootReducer;
