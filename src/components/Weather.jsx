import React, {PropTypes} from 'react'

const Weather = ({weather}) => (
  <div>
    {weather.name} : {weather.main.temp} <br/>
  {weather.weather[0].main}, {weather.weather[0].description}<br/>
  Sunrise: {convertEpoch(weather.sys.sunrise)}<br/>
  Sunset: {convertEpoch(weather.sys.sunset)}
  </div>
)

Weather.propTypes = {
  weather: PropTypes.object.isRequired
}

export default Weather

function convertEpoch (epochTime) {
  var d = new Date(0)
  d.setUTCSeconds(epochTime)
  return d.toString()
}
