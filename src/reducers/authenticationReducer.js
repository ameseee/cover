export const currentUser = (state = '', action) => {
  switch (action.type) {
  case 'CURRENT_USER':
    return action.username;
  default:
    return state;
  }
};

export const signedInStatus = (state = '', action) => {
  switch (action.type) {
  case 'TOGGLE_SIGN_IN':
    return true;
  case 'TOGGLE_SIGN_OUT':
    return false;
  default:
    return state;
  }
};
