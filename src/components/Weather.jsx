import React, {PropTypes} from 'react'

const Weather = ({weather}) => (
  <div>
    {weather.name} : {weather.main.temp} <br/>
  {weather.weather[0].main}, {weather.weather[0].description}<br/>
{weather.sys.sunrise}, {weather.sys.sunset}
  </div>
)

Weather.propTypes = {
  weather: PropTypes.object.isRequired
}

export default Weather
