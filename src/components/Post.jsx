import React, {PropTypes} from 'react'
const Post = ({title, temp}) => (
  <div>Name:{title} <br/> Temp:{temp}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}

export default Post
