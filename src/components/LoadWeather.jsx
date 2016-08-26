import React from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions'

let LoadWeather = ({dispatch}) => (
  <button
    onClick={e => dispatch(fetchWeather())}
    >Load weather</button>
)

LoadWeather = connect()(LoadWeather)

export default LoadWeather
