function weather (state = {
  name: '',
  main: {
    temp: 0
  }
}, action) {
  switch (action.type) {
    case 'RECEIVE_WEATHER':
      return action.weather

    default:
      return state
  }
}

export default weather
