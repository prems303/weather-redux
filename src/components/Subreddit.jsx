import React, {PropTypes} from 'react'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
      <Post
        title={subreddits.name}
        temp={1}
        />
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.object.isRequired
}

export default Subreddit
