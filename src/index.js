import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './utils/Routes';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

const router = (
    <Provider store={store}>
        <BrowserRouter>
          <div className="entire-app">
            <AppContainer />
            <Routes />
          </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('app'));
