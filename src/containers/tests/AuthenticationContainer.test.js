import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import AuthenticationContainer from '../AuthenticationContainer';
import Authentication from '../../components/authentication/Authentication';
import React from 'react';
import testSetup from '../../../__mock__/testSetup';

describe('Custom Message Form Container', () => {
  const mockStore = configureStore();
  const initialState = {
    currentUser: '',
    signedInStatus: false,
  };
  const mockSignIn = jest.fn();
  const mockSetCurrentUser = jest.fn();
  const store = mockStore(initialState);
  const wrapper = mount(<Authentication
    store={store}
    currentUser={initialState.currentUser}
    signedInStatus={initialState.signedInStatus}
    signIn={mockSignIn}
    setCurrentUser={mockSetCurrentUser} />);

  const actionWrapper = mount(<Authentication
    store={store}
    currentUser={initialState.currentUser}
    signedInStatus={initialState.signedInStatus}
    signIn={mockSignIn}
    setCurrentUser={mockSetCurrentUser} />);

  it('should have a default state', () => {
    expect(wrapper.instance().props.currentUser).toEqual('');
    expect(wrapper.instance().props.signedInStatus).toEqual(false);
  });

  it('should fire an action to sign in', () => {
    const signInBtn = actionWrapper.find('.sign-in-btn');

    signInBtn.simulate('click');
    expect(mockSignIn).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentUser).toHaveBeenCalledTimes(1);
  });

  it('should fire an action to sign up', () => {
    const signUpBtn = actionWrapper.find('.sign-up-btn');

    signUpBtn.simulate('click');
    expect(mockSignIn).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentUser).toHaveBeenCalledTimes(1);
  });

});
