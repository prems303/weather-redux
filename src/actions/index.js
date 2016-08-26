import request from 'superagent'

export const receiveWeather = (weather) => {
  return {
    type: 'RECEIVE_WEATHER',
    weather
  }
}

export function fetchWeather () {
  return (dispatch) => {
    return request
      .get('http://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=5f7bcf238dc7056a7325948af9cb61be')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveWeather(res.body))
      })
  }
}
