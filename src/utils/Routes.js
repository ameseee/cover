import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import AuthenticationContainer from '../containers/AuthenticationContainer';
import ManageContacts from '../components/manageContacts/ManageContacts';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route exact path="/" component={ MainContainer }/>
        <Route path="/auth" component={ AuthenticationContainer } />
        <Route path="/contacts" component={ ManageContacts } />
      </div>
    );
  }
}

export default Routes;
