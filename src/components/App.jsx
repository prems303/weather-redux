import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import EnterNewContainer from '../containers/EnterNewContainer'

const App = () => (
  <div className='app-container'>
    <EnterNewContainer />
    <LoadSubreddit />
    <SubredditContainer />
  </div>
)

export default App
