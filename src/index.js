import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateAccountContainer from './containers/CreateAccountContainer';
import MainContainer from './containers/MainContainer';
import ManageContactsContainer from './containers/ManageContactsContainer';
import SignInContainer from './containers/SignInContainer';
import ManageContacts from './components/manageContacts/ManageContacts';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

const router = (
    <Provider store={store}>
        <BrowserRouter>
          <div className="entire-app">
            <App />
            <Route exact path="/" component={MainContainer} />
            <Route path="/" component={SignInContainer} />
            {/* ^^change route to signin for SignInContainer */}
            <Route path="/" component={CreateAccountContainer} />
            {/* <Route path="/" comatom ponent={ManageContacts} /> */}
          </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('app'));
