// //MAIN
// export const getContactCards = cards => ({
//   type: 'GET_CONTACT_CARDS',
//   cards,
// });

export const signIn = boolean => ({
  type: 'TOGGLE_SIGN_IN',
  boolean,
});

export const signOut = boolean => ({
  type: 'TOGGLE_SIGN_OUT',
  boolean,
});

export const setCurrentUser = username => ({
  type: 'CURRENT_USER',
  username,
});

export const createNewContact = contact => ({
  type: 'CREATE_NEW_CONTACT',
  contact,
});

export const removeFromFB = (id) => ({
  type: 'REMOVE_FROM_FB',
  id,
});

export const loadContacts = (contacts) => ({
  type: 'LOAD_CONTACTS',
  contacts,
});

export const sendCustom = (message, phone) => {
  return dispatch => {
    fetch('http://localhost:3000/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ message, phone })
    })
    //catch errors !== 200
      .then(response => response.json())
      .catch(error => alert(error));
  };

};
