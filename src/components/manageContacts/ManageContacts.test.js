import React from 'react';
import ManageContacts from './ManageContacts';
import { shallow } from 'enzyme';

describe('<ManageContacts />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    const wrapper = shallow(<ManageContacts />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should have an empty default state of contactName', () => {
    expect(wrapper.state().contactName).toEqual('');
  });

  it.skip('should have an empty default state of contactNumber', () => {
    expect(wrapper.state().contactNumber).toEqual('');
  });

  it.skip('should render a title', () => {
    const title = wrapper.find('.section-title');

    expect(title.length).toEqual(1);
  });

  it.skip('should render all contacts', () => {
    const allContacts = wrapper.find('.all-contacts');

    expect(allContacts.length).toEqual(1);
  });

  //figure out how to give props to the component, give 2 fake contacts

  it.skip('should render two contact cards', () => {
    const cards = wrapper.find('.existing-contact-card');

    expect(cards.length).toEqual(2);
  });

  it.skip('should render two contact names', () => {
    const names = wrapper.find('.existing-contact-name');

    expect(names.length).toEqual(2);
  });

  it.skip('should render two contact numbers', () => {
    const numbers = wrapper.find('.existing-contact-name');

    expect(numbers.length).toEqual(2);
  });

//prob take out for MVP monday
  it.skip('should render two edit buttons', () => {
    const editBtn = wrapper.find('.edit-contact-btn');

    expect(editBtn.length).toEqual(2);
  });

//prob take out for MVP monday
  it.skip('should run a function to edit a contact', () => {
    const editBtn = wrapper.find('.edit-contact-btn');

    editBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should render two remove buttons', () => {
    const removeBtn = wrapper.find('.remove-contact-btn');

    expect(removeBtn.length).toEqual(2);
  });

  it.skip('should run a function to remove a contact', () => {
    const removeBtn = wrapper.find('.remove-contact-btn');

    removeBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should render a section to add new contacts', () => {
    const formSection = wrapper.find('.create-contact-form');

    expect(formSection.length).toEqual(1);
  });

  it.skip('should render a title for the form', () => {
    const add = wrapper.find('.add');

    expect(add.length).toEqual(1);
  });

  it.skip('should render two inputs', () => {
    const input = wrapper.find('input');

    expect(input.length).toEqual(2);
  });

  it.skip('should change state on input', () => {
    const nameInput = wrapper.find('.new-contact-name');
    const numberInput = wrapper.find('.new-contact-number');

    nameInput.simulate('change', { target: { value: 'Amy' } });
    numberInput.simulate('change', { target: { value: '5756441355' } });
    expect(wrapper.state().contactName).toEqual('Amy');
    expect(wrapper.state().contactNumber).toEqual('5756441355');
  });

  it.skip('should render a button to save new contact', () => {
    const saveBtn = wrapper.find('.save-new-contact');

    expect(saveBtn.length).toEqual(1);
  });

  it.skip('should run a function to save new contact', () => {
    const saveBtn = wrapper.find('.save-new-contact');

    saveBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
