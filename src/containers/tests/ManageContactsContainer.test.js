import configureStore from 'redux-mock-store';
import * as actions from '../../actions/actions';
import { mount } from 'enzyme';
import ManageContactsContainer from '../ManageContactsContainer';
import ManageContacts from '../../components/manageContacts/ManageContacts';
import React from 'react';
import thunk from 'redux-thunk';
import testSetup from '../../../__mock__/testSetup';
import PropTypes from 'prop-types';
import createRouterContext from 'react-router-test-context';

describe('Custom Message Form Container', () => {
  const middlewares = [thunk];
  const mockStore = configureStore();
  const mockLoadContacts = jest.fn();
  const initialState = {
    currentUser: '',
    loadedContacts: [],
  };
  const store = mockStore(initialState, middlewares);
  actions.loadContacts = () => ({ type: 'LOAD_CONTACTS' });
  const context = createRouterContext();

  ManageContactsContainer.contextTypes = {
    router: PropTypes.object
  };

  it('should have a default state', () => {
    const wrapper = mount(<ManageContactsContainer
      store={store}
      currentUser={initialState.currentUser}
      loadedContacts={initialState.loadedContacts}
      loadContacts={mockLoadContacts} />, { context });

    expect(wrapper.instance().props.currentUser).toEqual('');
    expect(wrapper.instance().props.loadedContacts).toEqual([]);
  });

});
