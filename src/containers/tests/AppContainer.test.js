import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import AppContainer from '../AppContainer';
import StaticRouter from 'react-router';
import App from '../../components/App/App';
import React from 'react';
import testSetup from '../../../__mock__/testSetup';
import PropTypes from 'prop-types';
import createRouterContext from 'react-router-test-context';

describe('App Container', () => {
  const mockStore = configureStore();
  const initialState = {
    currentUser: '',
  };
  const mockSetCurrentUser = jest.fn();
  const mockSignOut = jest.fn();
  const store = mockStore(initialState);
  const context = createRouterContext();

  AppContainer.contextTypes = {
    router: PropTypes.object
  };

  it('should have a default state', () => {
    const wrapper = mount(
      <AppContainer
        store={store}
        currentUser={initialState.currentUser}
        signOut={mockSignOut}
        setCurrentUser={mockSetCurrentUser} />, { context });

    expect(wrapper.instance().props.currentUser).toEqual('');
  });

  it('should fire actions', () => {
    const userState = {
      currentUser: 'Amy',
    };
    const actionWrapper = mount(<AppContainer
      store={store}
      currentUser={userState.currentUser}
      signOut={mockSignOut}
      setCurrentUser={mockSetCurrentUser} />, { context });

    const signOutBtn = actionWrapper.find('.sign-out');

    signOutBtn.simulate('click');
    expect(mockSignOut).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentUser).toHaveBeenCalledTimes(1);
  });
});
