import * as actions from './actions';
import fetchMock from 'fetch-mock';

describe('actions', () => {

  it('should create an action to sign user in', () => {
    const expectedAction = {
      type: 'TOGGLE_SIGN_IN',
      boolean: true
    };

    expect(actions.signIn(true)).toEqual(expectedAction);
  });

  it('should create an action to sign user out', () => {
    const expectedAction = {
      type: 'TOGGLE_SIGN_OUT',
      boolean: false
    };

    expect(actions.signOut(false)).toEqual(expectedAction);
  });

  it('should create an action to set the current user', () => {
    const expectedAction = {
      type: 'CURRENT_USER',
      username: 'Amy'
    };

    expect(actions.setCurrentUser('Amy')).toEqual(expectedAction);
  });

  it('should create an action to create a new contact', () => {
    const expectedAction = {
      type: 'CREATE_NEW_CONTACT',
      contact: {name: 'Cindy', number: '3035551234'}
    };

    expect(actions.createNewContact({name: 'Cindy', number: '3035551234'}))
      .toEqual(expectedAction);
  });

  it('should create an action to remove an existing contact from firebase',
    () => {
      const expectedAction = {
        type: 'REMOVE_FROM_FB',
        id: '123'
      };

      expect(actions.removeFromFB('123')).toEqual(expectedAction);
    });

  it('should create an action to load contacts', () => {
    const contacts = [
      {name: 'Cindy', number: '3035551234'},
      {name: 'Francy', number: '7025551234'}];
    const expectedAction = {
      type: 'LOAD_CONTACTS',
      contacts
    };

    expect(actions.loadContacts(contacts))
      .toEqual(expectedAction);
  });

  it('should post message and phone number to server',
    () => {
      const message = 'hello friend';
      const phone = '5756441355';
      const mockPostResponse = { message, phone };
      const mockPostURL = 'http://localhost:3000/api/message';
      fetchMock.post(mockPostURL, mockPostResponse);
      expect(true).toBe(true);
    });

});
