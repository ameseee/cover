import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import CustomMessageFormContainer from '../CustomMessageFormContainer';
import CustomMessageForm from '../../components/customMessageForm/CustomMessageForm';
import React from 'react';
import testSetup from '../../../__mock__/testSetup';

describe('Custom Message Form Container', () => {
  const mockStore = configureStore();
  const initialState = {
    contacts: [],
  };
  const mockSendCustom = jest.fn();
  const store = mockStore(initialState);
  const wrapper = mount(<CustomMessageForm
    store={store}
    contacts={initialState.contacts}
    sendCustom={mockSendCustom}/>);

  it('should have a default state', () => {
    expect(wrapper.instance().props.contacts).toEqual([]);
  });

  it('should fire actions', () => {
    const actionWrapper = mount(<CustomMessageForm
      store={store}
      contacts={initialState.contacts}
      sendCustom={mockSendCustom}/>);

    const sendCustomBtn = actionWrapper.find('.send-custom-btn');

    sendCustomBtn.simulate('click');
    expect(mockSendCustom).toHaveBeenCalledTimes(1);
  });

});
