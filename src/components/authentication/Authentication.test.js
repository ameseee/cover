import React from 'react';
import Authentication from './Authentication';
import { shallow } from 'enzyme';

describe('<Authentication />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    const wrapper = shallow(<Authentication />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should have a empty default state of username', () => {
    expect(wrapper.state().username).toEqual('');
  });

  it.skip('should have a empty default state of password', () => {
    expect(wrapper.state().password).toEqual('');
  });

  it.skip('should have a false default state of newUser', () => {
    expect(wrapper.state().newUser).toEqual(false);
  });

  it.skip('should render a title', () => {
    const title = wrapper.find('h3');

    expect(title.length).toEqual(1);
  });

  it.skip('should render two inputs', () => {
    const input = wrapper.find('input');

    expect(input.length).toEqual(2);
  });

  it.skip('should change state on input', () => {
    const username = wrapper.find('.name');
    const password = wrapper.find('.password');

    username.simulate('change', { target: { value: 'amy@gmail.com' } });
    password.simulate('change', { target: { value: 'password' } });
    expect(wrapper.state().username).toEqual('amy@gmail.com');
    expect(wrapper.state().password).toEqual('password');
  });

  it.skip('should render a button to sign up/in', () => {
    const button = wrapper.find('btn');

    expect(button.length).toEqual(1);
  });

  it.skip('should run a function to sign up/in', () => {
    const button = wrapper.find('btn');

    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should clear input and state once user signs in/up', () => {
    const button = wrapper.find('btn');

    button.simulate('click');
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it.skip('should render a prompt to toggle forms', () => {
    const prompt = wrapper.find('h4');

    expect(prompt.length).toEqual(1);
  });

  it.skip('should render a button to toggle sign in/up', () => {
    const button = wrapper.find('other-card-btn');

    expect(button.length).toEqual(1);
  });

  it.skip('should run a function to switch forms', () => {
    const button = wrapper.find('other-card-btn');

    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should change state when other form button is clicked', () => {
    const button = wrapper.find('other-card-btn');

    expect(wrapper.state().newUser).toEqual(false);
    button.simulate('click');
    expect(wrapper.state().newUser).toEqual(true);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
