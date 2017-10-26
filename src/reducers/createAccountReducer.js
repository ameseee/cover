export const newUser = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return action.accountInfo;
    default:
      return state;
  }
};
