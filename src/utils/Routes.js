import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import SignInContainer from '../containers/SignInContainer';
import CreateAccountContainer from '../containers/CreateAccountContainer';
import ManageContacts from '../components/manageContacts/ManageContacts';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route exact path="/" component={ MainContainer }/>
        <Route path="/signin" component={ SignInContainer } />
        <Route path="/create" component={ CreateAccountContainer } />
        <Route path="/contacts" component={ ManageContacts} />
      </div>
    );
  }
}

export default Routes;
