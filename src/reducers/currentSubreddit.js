const currentSubreddit = (state = 'Auckland', action) => {
  switch (action.type) {
    case 'ENTER_NEW':
      return action.word

    default:
      return state
  }
}

export default currentSubreddit
