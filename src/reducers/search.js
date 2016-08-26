function search (state = 'Auckland', action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.citySearch

    default:
      return state
  }
}

export default search
