import React, {PropTypes} from 'react'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
      <Post
        {...subreddits}
        />
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.object.isRequired
}

export default Subreddit
