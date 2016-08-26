import request from 'superagent'

export const receiveWeather = weather => {
  return {
    type: 'RECEIVE_WEATHER',
    weather
  }
}

export const setSearch = keyword => {
  return {
    type: 'SET_SEARCH',
    keyword
  }
}

export function citySearch (evt, dispatch) {
  if (evt.keyCode === 13) {
    dispatch(setSearch(evt.currentTarget.value))
    dispatch(fetchWeather())
    evt.currentTarget.value = ''
  }
}

export function fetchWeather () {
  return (dispatch, getState) => {
    const city = getState().search
    return request
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f7bcf238dc7056a7325948af9cb61be`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveWeather(res.body))
      })
  }
}
