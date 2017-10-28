//MAIN
export const getContactCards = cards => ({
  type: 'GET_CONTACT_CARDS',
  cards
});

//createAccount
export const currentUser = username => ({
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
