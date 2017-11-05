import { currentUser, signedInStatus } from './authenticationReducer';
import { loadContacts } from './manageContactsReducer';

const mockUser = '3kyjFZgtlzNMLlpIDELYKNFrGn22';

describe('currentUser in authentication reducer', () => {
  it('should have a default state', () => {
    expect(currentUser(undefined, '')).toEqual('');
  });

  it('should store currentUser name when passed a string', () => {
    const action = { type: 'CURRENT_USER', username: mockUser };

    expect(currentUser(undefined, action)).toEqual(mockUser);
  });

});

describe('signedInStatus in authentication reducer', () => {
  it('should have a default state', () => {
    expect(currentUser(undefined, '')).toEqual('');
  });

  it('should flag signedInStatus as false before a user is signed in', () => {
    const action = { type: 'TOGGLE_SIGN_OUT', username: '' };

    expect(signedInStatus(undefined, action)).toEqual(false);
  });

  it('should flag signedInStatus as true once a user is signed in', () => {
    const action = { type: 'TOGGLE_SIGN_IN',  username: mockUser };

    expect(signedInStatus(undefined, action)).toEqual(true);
  });

});

describe('loadContacts in manage contacts reducer', () => {
  const mockContact = {
    contactName: 'Amy',
    contactNumber: '5755551234',
    userId: '3kyjFZgtlzNMLlpIDELYKNFrGn22'
  };

  it('should have a default state', () => {
    expect(loadContacts(undefined, [])).toEqual([]);
  });

  it('should load contact objects in array', () => {
    const action = { type: 'LOAD_CONTACTS', contacts: mockContact };

    expect(loadContacts(undefined, action)).toEqual(mockContact);
  });

});
