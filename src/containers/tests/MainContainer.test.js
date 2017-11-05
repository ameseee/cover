import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import MainContainer from '../MainContainer';
import Main from '../../components/main/Main';
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

  MainContainer.contextTypes = {
    router: PropTypes.object
  };

  it('should have a default state', () => {
    const wrapper = mount(<MainContainer
      store={store}
      currentUser={initialState.currentUser}
      loadedContacts={initialState.loadedContacts}
      loadContacts={mockLoadContacts} />, { context });

    expect(wrapper.instance().props.currentUser).toEqual('');
    expect(wrapper.instance().props.loadedContacts).toEqual([]);
  });

});
