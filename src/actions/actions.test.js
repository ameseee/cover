import * as actions from './actions';

describe('actions', () => {
  it('should create an action to sign user in', () => {
    const expectedAction = {
      type: 'TOGGLE_SIGN_IN',
      boolean: true
    };
console.log(actions.signIn);
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
np
    expect(actions.setCurrentUser('Amy')).toEqual(expectedAction);
  });

  it('should create an action to create a new contact', () => {
    const expectedAction = {
      type: 'CREATE_NEW_CONTACT',
      contact: {name: 'Cindy', number: '3035551234'}
    };

    expect(actions.createNewContact({name: 'Cindy', number: '3035551234'})).toEqual(expectedAction);
  });

  it('should create an action to remove an existing contact', () => {
    const expectedAction = {
      type: 'REMOVE_CONTACT',
      contact: {}
    };

    expect(actions.removeContact({})).toEqual(expectedAction);
  });

})
