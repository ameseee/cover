import React from 'react';
import Authentication from './Authentication';
import { shallow } from 'enzyme';
import testSetup from '../../../__mock__/testSetup';

describe('<Authentication />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Authentication />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a empty default state of username', () => {
    expect(wrapper.state().username).toEqual('');
  });

  it('should have a empty default state of password', () => {
    expect(wrapper.state().password).toEqual('');
  });

  it('should have a false default state of newUser', () => {
    expect(wrapper.state().newUser).toEqual(false);
  });

  it('should render a title for each form', () => {
    const title = wrapper.find('h3');

    expect(title.length).toEqual(2);
  });

  it('should render two inputs for each form', () => {
    const input = wrapper.find('input');

    expect(input.length).toEqual(4);
  });

  it('should change state on input', () => {
    const username = wrapper.find('.sign-in-name');
    const password = wrapper.find('.sign-in-password');

    username.simulate('change', { target: { value: 'amy@gmail.com' } });
    password.simulate('change', { target: { value: 'password' } });
    expect(wrapper.state().username).toEqual('amy@gmail.com');
    expect(wrapper.state().password).toEqual('password');
  });

  it('should change state on input', () => {
    const username = wrapper.find('.sign-up-name');
    const password = wrapper.find('.sign-up-password');

    username.simulate('change', { target: { value: 'amy@gmail.com' } });
    password.simulate('change', { target: { value: 'password' } });
    expect(wrapper.state().username).toEqual('amy@gmail.com');
    expect(wrapper.state().password).toEqual('password');
  });

  it('should render a button to sign up/in for each form', () => {
    const button = wrapper.find('.btn');

    expect(button.length).toEqual(2);
  });

  it('should run a function to sign in', () => {
    const button = wrapper.find('.sign-in-btn');

    wrapper.instance().signInClick = mockFn;
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should run a function to sign up', () => {
    const button = wrapper.find('.sign-up-btn');

    wrapper.instance().signInClick = mockFn;
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should clear input and state once user signs in', () => {
    const button = wrapper.find('.sign-in-btn');

    button.simulate('click');
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should clear input and state once user signs up', () => {
    const button = wrapper.find('.sign-up-btn');

    button.simulate('click');
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should render a prompt to toggle forms', () => {
    const prompt = wrapper.find('h4');

    expect(prompt.length).toEqual(1);
  });

  it('should render a button to toggle sign in/up', () => {
    const button = wrapper.find('.other-card-btn');

    expect(button.length).toEqual(1);
  });

  it('should change state when other form button is clicked', () => {
    const button = wrapper.find('.other-card-btn');

    expect(wrapper.state().newUser).toEqual(false);
    button.simulate('click');
    expect(wrapper.state().newUser).toEqual(true);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
