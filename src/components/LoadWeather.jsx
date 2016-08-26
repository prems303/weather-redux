import React from 'react'
import {connect} from 'react-redux'
import {fetchWeather, citySearch, setSearch} from '../actions'

let LoadWeather = ({dispatch}) => (
  <div>
    <input
    type="text"
    placeholder="Enter city name"
    onKeyUp={e => citySearch(e, dispatch)}
    />
    <button
      onClick={e => dispatch(fetchWeather())}
      >Load weather</button>
  </div>
)

LoadWeather = connect()(LoadWeather)

export default LoadWeather
