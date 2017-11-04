import React from 'react';
import MobileNav from './MobileNav';
import { shallow } from 'enzyme';

describe('<MobileNav />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    const wrapper = shallow(<MobileNav />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should render a "go back" button', () => {
    const goBackBtn = wrapper.find('.go-back');

    expect(goBackBtn.length).toEqual(1);
  });

  it.skip('should render a four drop down option links', () => {
    const option = wrapper.find('.drop-down-option');

    expect(option.length).toEqual(4);
  });

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
