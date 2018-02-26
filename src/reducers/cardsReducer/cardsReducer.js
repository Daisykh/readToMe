export const cardsReducer = (state=[], action) => {
  switch(action.type) {
    case 'LOAD_CARDS':
      return action.cards
    default:
      return state
  }
}