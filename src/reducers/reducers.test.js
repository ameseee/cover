import { currentUser, signedInStatus } from './authenticationReducer';
// import { getContactCards } from './mainReducer';
import { createNewContact, removeContact, loadContacts } from './manageContactsReducer';

const mockUser = '3kyjFZgtlzNMLlpIDELYKNFrGn22';

describe('currentUser in authentication reducer', () => {
  it('should have a default state', () => {
    expect(currentUser(undefined, '')).toEqual('');
  });

  it('should store currentUser name when passed a string', () => {
    const action = { type: 'CURRENT_USER', username: mockUser };

    expect(currentUser(undefined, action)).toEqual(mockUser);
  });
})

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
})


// describe('main reducer', () => {
//   it('should have a default state', () => {
//     expect(getContactCards(undefined, [])).toEqual([]);
//   });
//
//   it.skip('should', () => {
//
//   });
// })


const mockContact = {
  contactName: 'Amy',
  contactNumber: '5755551234',
  userId: '3kyjFZgtlzNMLlpIDELYKNFrGn22'
};

describe('createNewContact in manage contacts reducer', () => {
  it('should have a default state', () => {
    expect(createNewContact(undefined, [])).toEqual([]);
  });

  it('should store new contact once passed a contact object', () => {
    const action = { type: 'CREATE_NEW_CONTACT', contact: mockContact };

    expect(createNewContact(undefined, action)).toEqual(mockContact);
  });
})

describe('removeContact in manage contacts reducer', () => {
  it('should have a default state', () => {
    expect(removeContact(undefined, [])).toEqual([]);
  });

  it.skip('should remove a contact', () => {

  });
})

describe('loadContacts in manage contacts reducer', () => {
  it('should have a default state', () => {
    expect(loadContacts(undefined, [])).toEqual([]);
  });

  it('should load contact objects in array', () => {
    const action = { type: 'LOAD_CONTACTS', contacts: mockContact }

    expect(loadContacts(undefined, action)).toEqual(mockContact)
  });
})
