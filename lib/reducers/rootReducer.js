import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const dummyReducer = (state = [], action) => {
  switch (action.type) {
    case 'DUMMY_REDUCER':
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dummyReducer
});

export default rootReducer;
