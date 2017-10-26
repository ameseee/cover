export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return action.status;
    default:
      return state;
  }
};

// export const signInSuccess = (state = false, action) => {
//   switch (action.type) {
//     case 'SIGN_IN_SUCCESS':
//       return action.status;
//     default:
//       return state;
//   }
// };
//
// export const signInFailed = (state = false, action) => {
//   switch (action.type) {
//     case 'SIGN_IN_FAILED':
//       return action.status;
//     default:
//       return state;
//   }
// };
