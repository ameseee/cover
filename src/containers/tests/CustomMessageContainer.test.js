import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import AppContainer from '../AppContainer';
import App from '../../components/App/App';
import React from 'react';

describe('App Container', () => {
  const mockStore = configureStore();
  const initialState = {
    contacts: [],
  };
  const mockSendCustom = jest.fn();
  const store = mockStore(initialState);
  const wrapper = mount(<App
    store={store}
    contacts={initialState.contacts}
    sendCustom={mockSendCustom}/>);

  it('should have a default state', () => {
    expect(wrapper.instance().props.contacts).toEqual([]);
  });

  it('should fire actions', () => {
    const actionWrapper = mount(<App
      store={store}
      contacts={initialState.contacts}
      sendCustom={mockSendCustom}/>);

  
    button.simulate('click');
    expect(mockSendCustom).toHaveBeenCalledTimes(1);
  });
});
