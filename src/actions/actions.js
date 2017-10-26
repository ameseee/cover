//MAIN
export const getContactCards = cards => ({
  type: 'GET_CONTACT_CARDS',
  cards
});

//SignIn
export const currentUser = status => ({
  type: 'CURRENT_USER',
  status
});

//CreateAccount
export const newUser = accountInfo => ({
  type: 'CREATE_ACCOUNT',
  accountInfo
});

export const signInNewUser = accountInfo => dispatch => {
  dispatch(currentUser(accountInfo))
}
//ManageContacts
export const createNewContact = contact => ({
  type: 'CREATE_NEW_CONTACT',
  contact
});

export const removeContact = contact => ({
  type: 'REMOVE_CONTACT',
  contact
});
