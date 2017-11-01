import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import AuthenticationContainer from '../containers/AuthenticationContainer';
import ManageContactsContainer from '../containers/ManageContactsContainer';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route path="/main" component={ MainContainer }/>
        <Route exact path="/" component={ AuthenticationContainer } />
        <Route path="/contacts" component={ ManageContactsContainer } />
      </div>
    );
  }
}

export default Routes;
