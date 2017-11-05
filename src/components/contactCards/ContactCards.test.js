import React from 'react';
import ContactCards from './ContactCards';
import { shallow } from 'enzyme';
import testSetup from '../../../__mock__/testSetup';

describe('<ContactCards />', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<ContactCards />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a false default state of sendingCustom', () => {
    expect(wrapper.state().sendingCustom).toEqual(false);
  });

  it('should render a contact name', () => {
    const contactName = wrapper.find('h4');

    expect(contactName.length).toEqual(1);
  });

  it('should render a two buttons', () => {
    const buttons = wrapper.find('button');

    expect(buttons.length).toEqual(2);
  });

  it('should change state on input', () => {
    const customBtn = wrapper.find('.custom-text-btn');

    customBtn.simulate('click');
    expect(wrapper.state().sendingCustom).toEqual(true);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
