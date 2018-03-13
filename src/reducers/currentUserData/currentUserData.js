export const currentUserData = (state={}, action) => {
  switch (action.type) {
  case 'UPDATE_READER':
    return action.cards;
  default:
    return state;
  }
};