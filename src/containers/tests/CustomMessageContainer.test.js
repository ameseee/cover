import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import CustomMessageFormContainer from '../CustomMessageFormContainer';
import
CustomMessageForm from '../../components/customMessageForm/CustomMessageForm';
import React from 'react';
import testSetup from '../../../__mock__/testSetup';
import PropTypes from 'prop-types';
import createRouterContext from 'react-router-test-context';

describe('Custom Message Form Container', () => {
  const mockStore = configureStore();
  const initialState = {
    contacts: [],
  };
  const mockSendCustom = jest.fn();
  const store = mockStore(initialState);
  const context = createRouterContext();

  CustomMessageFormContainer.contextTypes = {
    router: PropTypes.object
  };

  it('should have a default state', () => {
    const wrapper = mount(<CustomMessageFormContainer
      store={store}
      contacts={initialState.contacts}
      sendCustom={mockSendCustom} />, { context });

    expect(wrapper.instance().props.contacts).toEqual([]);
  });

  it('should fire actions', () => {
    const actionWrapper = mount(<CustomMessageFormContainer
      store={store}
      contacts={initialState.contacts}
      sendCustom={mockSendCustom} />, { context });

    const sendCustomBtn = actionWrapper.find('.send-custom-btn');

    sendCustomBtn.simulate('click');
    expect(mockSendCustom).toHaveBeenCalledTimes(1);
  });

});
