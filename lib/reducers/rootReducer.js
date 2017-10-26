import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getContactCards } from './mainReducer';
import {
  signInRequested,
  signInSuccess,
  signInFailed } from './signInReducer';
  import {
    createAccountRequested,
    createAccountSuccess,
    createAccountFailure } from './createAccountReducer';


const rootReducer = combineReducers({
  getContactCards,
  signInRequested,
  signInSuccess,
  signInFailed,
  createAccountRequested,
  createAccountSuccess,
  createAccountFailure
});

export default rootReducer;
