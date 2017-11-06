import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import testSetup from '../../../__mock__/testSetup';

describe('<App />', () => {
  let wrapper;
  let noUserWrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<App currentUser="Amy"/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a false default state of mobileNav', () => {
    expect(wrapper.state().mobileNav).toEqual(false);
  });

  it('should render a nav bar', () => {
    const nav = wrapper.find('nav');

    expect(nav.length).toEqual(1);
  });

  it('should render a brand title', () => {
    const title = wrapper.find('h1');

    expect(title.length).toEqual(1);
  });

  it('should render a nav bar list', () => {
    const navList = wrapper.find('ul');

    expect(navList.length).toEqual(1);
  });

  it('should render two options on nav bar if user is signed in', () => {
    const navItems = wrapper.find('li');

    expect(navItems.length).toEqual(2);
  });

  it('should render two options on nav bar if no user', () => {
    const noUserWrapper = shallow(<App currentUser=""/>);
    const navItems = noUserWrapper.find('li');

    expect(navItems.length).toEqual(2);
  });

  it('should render a sign out link if user is signed in', () => {
    const signOut = wrapper.find('.sign-out');

    expect(signOut.length).toEqual(1);
  });

  it('should change state on click of the hamburger', () => {
    const props = { history: [] };
    const wrapper = shallow(<App {...props}/>);
    const hamburger = wrapper.find('.hamburger');

    hamburger.simulate('click');
    expect(wrapper.state().mobileNav).toEqual(true);
  });

  it('should run a function on click ', () => {
    const props = { history: [] };
    const wrapper = shallow(<App {...props}/>);
    const hamburger = wrapper.find('.hamburger');

    wrapper.instance().showMobileNav = mockFn;
    hamburger.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should render an exit button at all times', () => {
    const exitBtn = wrapper.find('.exit');

    expect(exitBtn.length).toEqual(1);
  });

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
