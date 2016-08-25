import {combineReducers} from 'redux'

import subreddits from './subreddits'
import currentSubreddit from './currentSubreddit'

export default combineReducers({
  subreddits,
  currentSubreddit
})
