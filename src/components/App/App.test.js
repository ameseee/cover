 import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {

  const mockFn = jest.fn();
  const wrapper = shallow(<App />);

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it.skip('should have a false default state of mobileNav', () => {

    expect().toEqual();
  });

  it.skip('should', () => {

    expect().toEqual();
  });

  it.skip('should', () => {

    expect().toEqual();
  });
});
