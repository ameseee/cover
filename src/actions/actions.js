//MAIN
export const getContactCards = cards => ({
  type: 'GET_CONTACT_CARDS',
  cards
});

//SignIn
export const signInRequested = status => ({
  type: 'SIGN_IN_REQUESTED',
  status
});

export const signInSuccess = status => ({
  type: 'SIGN_IN_SUCCESS',
  status
});

export const signInFailed = status => ({
  type: 'SIGN_IN_FAILED',
  status
});

//CreateAccount
export const createAccountRequested = status => ({
  type: 'CREATE_ACCOUNT_REQUESTED',
  status
});

export const createAccountSuccess = status => ({
  type: 'CREATE_ACCOUNT_SUCCESS',
  status
});

export const createAccountFailure = status => ({
  type: 'CREATE_ACCOUNT_FAILURE',
  status
});
