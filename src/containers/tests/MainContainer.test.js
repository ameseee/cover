import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import MainContainer from '../MainContainer';
import Main from '../../components/main/Main';
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
  const wrapper = mount(<Main
    store={store}
    currentUser={initialState.currentUser}
    loadedContacts={initialState.loadedContacts}
    loadContacts={mockLoadContacts} />);

  it('should have a default state', () => {
    expect(wrapper.instance().props.currentUser).toEqual('');
    expect(wrapper.instance().props.loadedContacts).toEqual([]);
  });

  it('should fire actions', () => {
    const actionWrapper = mount(<Main
      store={store}
      currentUser={initialState.currentUser}
      loadedContacts={initialState.loadedContacts}
      loadContacts={mockLoadContacts} />);

    //componentDidMount ??
    expect(mockLoadContacts).toHaveBeenCalledTimes(1);
  });

});
