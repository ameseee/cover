import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import AppContainer from '../AppContainer';
import App from '../../components/App/App';
import React from 'react';

describe('App Container', () => {
  const mockStore = configureStore();
  const initialState = {
    currentUser: '',
  };
  const mockSetCurrentUser = jest.fn();
  const mockSignOut = jest.fn();
  const store = mockStore(initialState);
  const wrapper = mount(<App
    store={store}
    currentUser={initialState.currentUser}
    signOut={mockSignOut}
    setCurrentUser={mockSetCurrentUser}/>);

  it('should have a default state', () => {
    expect(wrapper.instance().props.currentUser).toEqual('');
  });

  it.skip('should fire actions', () => {
    const actionWrapper = mount(<App
      store={store}
      currentUser={initialState.currentUser}
      signOut={mockSignOut}
      setCurrentUser={mockSetCurrentUser}/>);

    const signOutBtn = actionWrapper.find('.sign-out');

    signOutBtn.simulate('click');
    expect(mockSignOut).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentUser).toHaveBeenCalledTimes(1);
  });
});
