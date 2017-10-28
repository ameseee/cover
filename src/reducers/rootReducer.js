import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getContactCards } from './mainReducer';
import { currentUser } from './createAccountReducer';


const rootReducer = combineReducers({
  getContactCards,
  currentUser
});

export default rootReducer;
