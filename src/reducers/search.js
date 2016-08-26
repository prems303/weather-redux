function setSearch (state = 'Auckland', action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.keyword

    default:
      return state
  }
}

export default setSearch
