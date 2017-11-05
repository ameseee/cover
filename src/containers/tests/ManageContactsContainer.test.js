import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import ManageContactsContainer from '../ManageContactsContainer';
import ManageContacts from '../../components/manageContacts/ManageContacts';
import React from 'react';
import testSetup from '../../../__mock__/testSetup';

describe('Custom Message Form Container', () => {
  const mockStore = configureStore();
  const initialState = {
    currentUser: '',
    loadedContacts: [],
  };
  const mockLoadContacts = jest.fn();
  const store = mockStore(initialState);
  const wrapper = mount(<ManageContacts
    store={store}
    currentUser={initialState.currentUser}
    loadedContacts={initialState.loadedContacts}
    loadContacts={mockLoadContacts} />);

  it('should have a default state', () => {
    expect(wrapper.instance().props.currentUser).toEqual('');
    expect(wrapper.instance().props.loadedContacts).toEqual([]);
  });

});
