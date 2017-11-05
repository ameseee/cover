import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import ManageContactsContainer from '../ManageContactsContainer';
import ManageContacts from '../../components/manageContacts/ManageContacts';
import React from 'react';
import testSetup from '../../../__mock__/testSetup';
import PropTypes from 'prop-types';
import createRouterContext from 'react-router-test-context';

describe('Custom Message Form Container', () => {
  const mockStore = configureStore();
  const initialState = {
    currentUser: '',
    loadedContacts: [],
  };
  const mockLoadContacts = jest.fn();
  const store = mockStore(initialState);
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
