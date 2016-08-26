import React from 'react'

import LoadWeather from './LoadWeather'
import WeatherContainer from '../containers/WeatherContainer'

const App = () => (
  <div className='app-container'>
    <LoadWeather />
    <WeatherContainer />
  </div>
)

export default App
