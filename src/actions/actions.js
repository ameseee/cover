//MAIN
export const getContactCards = cards => ({
  type: 'GET_CONTACT_CARDS',
  cards
});

//createAccount
export const signIn = boolean => {
  return {
    type: 'TOGGLE_SIGN_IN',
    boolean
  }
};

export const signOut = boolean => ({
  type: 'TOGGLE_SIGN_OUT',
  boolean
});

export const setCurrentUser = username => ({
  type: 'CURRENT_USER',
  username
});

//ManageContacts
export const createNewContact = contact => ({
  type: 'CREATE_NEW_CONTACT',
  contact
});

export const removeContact = contact => ({
  type: 'REMOVE_CONTACT',
  contact
});
