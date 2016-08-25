import React, {PropTypes} from 'react'
//trying to figure out how to add the time user story
const Post = ({title},{time}) => (
  <div>{title}{time}</div> 
)


Post.propTypes = {
  title: PropTypes.string.isRequired,
  time:PropTypes.string.isRequired
}

export default Post
