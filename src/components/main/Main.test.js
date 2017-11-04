import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';

describe('<Main />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    const wrapper = shallow(<Main loadedContacts={[]}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should render a main section', () => {
    const main = wrapper.find('main');

    expect(main.length).toEqual(1);
  });

  it.skip('should render three section titles', () => {
    const sectionTitle = wrapper.find('h3');

    expect(sectionTitle.length).toEqual(3);
  });

  it.skip('should render an emergency section', () => {
    const emergency = wrapper.find('.emergency-section');

    expect(emergency.length).toEqual(1);
  });

  it.skip('should render an emergency button', () => {
    const emergencyBtn = wrapper.find('.emergency-btn');

    expect(emergencyBtn.length).toEqual(1);
  });

  it.skip('should render a hotline section', () => {
    const hotline = wrapper.find('.hotline-section');

    expect(hotline.length).toEqual(1);
  });

  it.skip('should render a hotline button', () => {
    const hotlineBtn = wrapper.find('.hotline-btn');

    expect(hotlineBtn.length).toEqual(1);
  });

  it.skip(
    'should render a "no contacts yet" card if the user has no contacts',
    () => {
      const noContacts = wrapper.find('.no-contacts-card');

      expect(noContacts.length).toEqual(1);
    });

  it.skip('should run a function if the user does have contacts', () => {
    const contactsWrapper =
    shallow(<Main loadedContacts={[{amy: '5756441355'}]}/>);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
