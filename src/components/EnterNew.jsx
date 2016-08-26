import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {enterNew, fetchPosts} from '../actions'
// import styles from './main.css';

function submitReddit (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(enterNew(e.currentTarget.value))
    dispatch(fetchPosts())
    e.currentTarget.value = ''
  }
}

let EnterNew = ({dispatch}) => (
    <input
        placeholder="Enter a cityName"
        onKeyUp={e => {
            submitReddit(e, dispatch)
        }}
        />
)

EnterNew = connect()(EnterNew)

export default EnterNew
