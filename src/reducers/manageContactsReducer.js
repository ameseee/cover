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
      return action.contact;
    default:
      return state;
  }
};
