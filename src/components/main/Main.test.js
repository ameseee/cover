import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';
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

//does this no work bc its in the ternary inside the JSX? I gave it a prop of an empty array in the shallow, so IMO it should be working.
  it('should run a function if the user does have contacts', () => {
    const contactsWrapper =
    shallow(<Main loadedContacts={[]}/>);

    wrapper.instance().noContacts = mockFn;
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
