
export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.username;
    default:
      return state;
  }
};

export const signedIn = (state = false, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return action.boolean;
    default:
      return state;
  }
};
// 
// export const toggleSignIn = (state = {}, action) => {
//   switch (action.type) {
//     case 'TOGGLE_SIGN_IN':
//       return state
//     default:
//       return state;
//   }
// };
