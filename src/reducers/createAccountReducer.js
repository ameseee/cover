export const createAccountRequested = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT_REQUESTED':
      return action.status;
    default:
      return state;
  }
};

export const createAccountSuccess = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT_SUCCESS':
      return action.status;
    default:
      return state;
  }
};

export const createAccountFailure = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT_FAILURE':
      return action.status;
    default:
      return state;
  }
};
