import React, {PropTypes} from 'react'

const Weather = ({weather}) => (
  <div>
    {weather.name} : {weather.main.temp-273.15}
  </div>
)

Weather.propTypes = {
  weather: PropTypes.object.isRequired
}

export default Weather
