export const signInRequested = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN_REQUESTED':
      return action.status;
    default:
      return state;
  }
};

export const signInSuccess = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return action.status;
    default:
      return state;
  }
};

export const signInFailed = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN_FAILED':
      return action.status;
    default:
      return state;
  }
};
