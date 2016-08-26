import React, {PropTypes} from 'react'

const Weather = ({weather}) => (
  <div>
    {weather.name} : {weather.main.temp}
  </div>
)

Weather.propTypes = {
  weather: PropTypes.object.isRequired
}

export default Weather
