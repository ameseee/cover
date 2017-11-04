import React from 'react';
import CustomMessageForm from './CustomMessageForm';
import { shallow } from 'enzyme';

describe('<CustomMessageForm />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    const wrapper = shallow(<CustomMessageForm />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should have a false default state of message', () => {
    expect(wrapper.state().message).toEqual('');
  });

  it.skip('should have a false default state of sent', () => {
    expect(wrapper.state().sent).toEqual(false);
  });

  it.skip('should render a text area', () => {
    const text = wrapper.find('textarea');

    expect(text.length).toEqual(1);
  });

  it.skip('should change state on input', () => {
    const message = wrapper.find('.custom-message-form');

    message.simulate('change', { target: { value: 'hello friend' } });
    expect(wrapper.state().message).toEqual('hello friend');
  });

  it.skip('should render a button to send text', () => {
    const sendBtn = wrapper.find('send-custom-btn');

    expect(sendBtn.length).toEqual(1);
  });

  it.skip('should run a function to sign up/in', () => {
    const sendBtn = wrapper.find('send-custom-btn');

    sendBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should render a button to close form', () => {
    const closeBtn = wrapper.find('close-form-btn');

    expect(closeBtn.length).toEqual(1);
  });

  it.skip('should run a function to sign up/in', () => {
    const closeBtn = wrapper.find('close-form-btn');

    closeBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should render a div with a sent icon', () => {
    const sendIcon = wrapper.find('sent-icon');

    expect(sendIcon.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
