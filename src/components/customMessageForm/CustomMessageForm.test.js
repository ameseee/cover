import React from 'react';
import CustomMessageForm from './CustomMessageForm';
import { shallow } from 'enzyme';
import testSetup from '../../../__mock__/testSetup';

describe('<CustomMessageForm />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<CustomMessageForm toggleCustomForm={mockFn}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a false default state of message', () => {
    expect(wrapper.state().message).toEqual('');
  });

  it('should have a false default state of sent', () => {
    expect(wrapper.state().sent).toEqual(false);
  });

  it('should render a text area', () => {
    const text = wrapper.find('textarea');

    expect(text.length).toEqual(1);
  });

  it('should change state on input', () => {
    const message = wrapper.find('.custom-message-input');

    message.simulate('change', { target: { value: 'hello friend' } });
    expect(wrapper.state().message).toEqual('hello friend');
  });

  it('should render a button to send text', () => {
    const sendBtn = wrapper.find('.send-custom-btn');

    expect(sendBtn.length).toEqual(1);
  });

  it('should run a function to send a text', () => {
    const sendBtn = wrapper.find('.send-custom-btn');

    wrapper.instance().handleSend = mockFn;
    sendBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should render a button to close form', () => {
    const closeBtn = wrapper.find('.close-form-btn');

    expect(closeBtn.length).toEqual(1);
  });

  it('should run a function to close button form', () => {
    const closeBtn = wrapper.find('.close-form-btn');

    wrapper.instance().toggleCustomForm = mockFn;
    closeBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should render a div with a sent icon', () => {
    const sendIcon = wrapper.find('.sent-icon');

    expect(sendIcon.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
