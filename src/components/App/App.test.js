 import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {

  const wrapper = shallow(<App />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should have a false default state of mobileNav', () => {
    expect(wrapper.state().mobileNav).toEqual(false);
  });

  it.skip('should render a nav bar', () => {
    const nav = wrapper.find('nav');

    expect(nav.length).toEqual(1);
  });

  it.skip('should render a brand title', () => {
    const title = wrapper.find('h1');

    expect(title.length).toEqual(1);
  });

  it.skip('should render a nav bar list', () => {
    const navList = wrapper.find('ul');

    expect(navList.length).toEqual(1);
  });

  it.skip('should change state on click of the hamburger', () => {
    const hamburger = wrapper.find('.hamburger');

    hamburger.simulate('click');
    expect(wrapper.state().mobileNav).toEqual(true);
  });

  it.skip('should run a function on click ', () => {
    const hamburger = wrapper.find('.hamburger');

    hamburger.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
