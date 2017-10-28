
// from sign in:
export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.username;
    default:
      return state;
  }
};
