const getContactCards = (state = [], action) => {
  switch (action.type) {
    case 'GET_CONTACT_CARDS':
      return action.cards;
    default:
      return state;
  }
};

export default getContactCards;
