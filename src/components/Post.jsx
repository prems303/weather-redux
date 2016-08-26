import React, {PropTypes} from 'react'
const Post = ({name, main}) => (
  <div>Name:{name} <br/> Temp:{main.temp}</div>
)

Post.propTypes = {
  name: PropTypes.string.isRequired,
  main: PropTypes.object.isRequired
}

export default Post
