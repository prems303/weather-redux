function weather (state = {
  name: 'Auckland',
  main: {
    temp: 0
  },
  weather: [
    {
      main: ''
    }
  ],
  sys: {
    sunrise: 0,
    sunset: 0
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
