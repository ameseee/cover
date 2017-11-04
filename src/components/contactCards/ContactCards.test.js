import React from 'react';
import ContactCards from './ContactCards';
import { shallow } from 'enzyme';

describe('<ContactCards />', () => {
  let wrapper;

  beforeEach( () => {
    const wrapper = shallow(<ContactCards />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should have a false default state of sendingCustom', () => {
    expect(wrapper.state().sendingCustom).toEqual(false);
  });

  it.skip('should render a contact name', () => {
    const contactName = wrapper.find('h4');

    expect(contactName.length).toEqual(1);
  });

  it.skip('should render a two buttons', () => {
    const buttons = wrapper.find('button');

    expect(buttons.length).toEqual(2);
  });

  it.skip('should change state on input', () => {
    const customBtn = wrapper.find('.custom-text-btn');

    customBtn.simulate('click');
    expect(wrapper.state().sendingCustom).toEqual(true);
  });

});

//should render custom form when state is true
