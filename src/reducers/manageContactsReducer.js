export const createNewContact = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NEW_CONTACT':
      return action.contact;
    default:
      return state;
  }
};

export const removeContact = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_CONTACT':
      return action;
    default:
      return state;
  }
};

export const loadContacts = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CONTACTS':
      return action.contacts;
    default:
      return state;
  }
};

export const removeFromFB = (state = {}, action) => {
  switch (action.type) {
    case 'REMOVE_FROM_FB':
      return action;
    default:
      return state;
  }
}
