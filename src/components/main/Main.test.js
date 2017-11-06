import React from 'react';
import Main from './Main';
import { shallow, mount } from 'enzyme';
import testSetup from '../../../__mock__/testSetup';

describe('<Main />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Main loadedContacts={[]}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a main section', () => {
    const main = wrapper.find('main');

    expect(main.length).toEqual(1);
  });

  it('should render three section titles', () => {
    const sectionTitle = wrapper.find('h3');

    expect(sectionTitle.length).toEqual(3);
  });

  it('should render an emergency section', () => {
    const emergency = wrapper.find('.emergency-section');

    expect(emergency.length).toEqual(1);
  });

  it('should render an emergency button', () => {
    const emergencyBtn = wrapper.find('.emergency-btn');

    expect(emergencyBtn.length).toEqual(1);
  });

  it('should run a function to text 911', () => {
    const button = wrapper.find('.emergency-btn');

    wrapper.instance().handleSend = mockFn;
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should render a hotline section', () => {
    const hotline = wrapper.find('.hotline-section');

    expect(hotline.length).toEqual(1);
  });

  it('should render a hotline button', () => {
    const hotlineBtn = wrapper.find('.hotline-btn');

    expect(hotlineBtn.length).toEqual(1);
  });

  it(
    'should render a "no contacts yet" card if the user has no contacts',
    () => {
      const noContacts = wrapper.find('.no-contacts-card');

      expect(noContacts.length).toEqual(1);
    });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
