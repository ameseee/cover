export const location = (state = '', action) => {
  switch (action.type) {
  case 'STORE_LOCATION':
    return action.location;
  default:
    return state;
  }
};
