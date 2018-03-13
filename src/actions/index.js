export const loadCards = (cards) => ({
  type: 'LOAD_CARDS',
  cards
})

export const updateReader = (streakCount, lifeTimeCount) => ({
  type: 'UPDATE_READER',
  streakCount,
  lifeTimeCount
})