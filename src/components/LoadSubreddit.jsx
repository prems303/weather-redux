import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadSubreddit = ({dispatch}) => (
  <button
    onClick={e => dispatch(fetchPosts())}
    >Fetch Posts</button>
)

LoadSubreddit = connect()(LoadSubreddit)

export default LoadSubreddit
