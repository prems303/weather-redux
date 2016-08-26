import {connect} from 'react-redux'

import Weather from '../components/Weather'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    weather: state.weather,
  }
}

export default connect(
  mapStateToProps
)(Weather)
