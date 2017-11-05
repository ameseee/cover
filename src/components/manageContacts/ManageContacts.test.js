import React from 'react';
import ManageContacts from './ManageContacts';
import { shallow } from 'enzyme';
import testSetup from '../../../__mock__/testSetup';

describe('<ManageContacts />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(
      <ManageContacts
        loadedContacts={[
          { contactName: 'Amy',
            contactNumber: '5756441355'},
          { contactName: 'Cindy',
            contactNumber: '3035551234'},
        ]}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have an empty default state of contactName', () => {
    expect(wrapper.state().contactName).toEqual('');
  });

  it('should have an empty default state of contactNumber', () => {
    expect(wrapper.state().contactNumber).toEqual('');
  });

  it('should render a title', () => {
    const title = wrapper.find('.section-title');

    expect(title.length).toEqual(1);
  });

  it('should render all contacts', () => {
    const allContacts = wrapper.find('.all-contacts');

    expect(allContacts.length).toEqual(1);
  });

  //figure out how to give props to the component, give 2 fake contacts

  it('should render two contact cards', () => {
    const cards = wrapper.find('.existing-contact-card');

    expect(cards.length).toEqual(2);
  });

  it('should render two contact names', () => {
    const names = wrapper.find('.existing-contact-name');

    expect(names.length).toEqual(2);
  });

  it('should render two contact numbers', () => {
    const numbers = wrapper.find('.existing-contact-name');

    expect(numbers.length).toEqual(2);
  });

  it('should render two remove buttons', () => {
    const removeBtn = wrapper.find('.remove-contact-btn');

    expect(removeBtn.length).toEqual(2);
  });

  it('should run a function to remove a contact', () => {
    const removeBtn = wrapper.find('.remove-contact-btn').first();

    wrapper.instance().handleRemove = mockFn;
    removeBtn.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should render a section to add new contacts', () => {
    const formSection = wrapper.find('.create-contact-form');

    expect(formSection.length).toEqual(1);
  });

  it('should render a title for the form', () => {
    const add = wrapper.find('.add');

    expect(add.length).toEqual(1);
  });

  it('should render two inputs', () => {
    const input = wrapper.find('input');

    expect(input.length).toEqual(2);
  });

//not passing!!! it says state is still empty
  it('should change state on input', () => {
    const nameInput = wrapper.find('.new-contact-name');
    const numberInput = wrapper.find('.new-contact-number');

    nameInput.simulate('change', { target: { value: 'Amy' } });
    numberInput.simulate('change', { target: { value: '5756441355' } });
    expect(wrapper.state().contactName).toEqual('Amy');
    expect(wrapper.state().contactNumber).toEqual('5756441355');
  });

  it('should render a button to save new contact', () => {
    const saveBtn = wrapper.find('.save-new-contact');

    expect(saveBtn.length).toEqual(1);
  });

//not passing - mad about firebase shit
  it('should run a function to save new contact', () => {
    const saveBtn = wrapper.find('.save-new-contact');

    //wrapper.instance().handleSubmit = mockFn;
    saveBtn.simulate('click', { preventDefault() {} });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

//not passing - mad about firebase shit
  it('should change state when a new user is added', () => {
    const nameInput = wrapper.find('.new-contact-name');
    const numberInput = wrapper.find('.new-contact-number');
    const saveBtn = wrapper.find('.save-new-contact');

    //wrapper.instance().handleSubmit = mockFn;
    saveBtn.simulate('click', { preventDefault() {} });
    expect(wrapper.state().contactName).toEqual('');
    expect(wrapper.state().contactNumber).toEqual('');
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
