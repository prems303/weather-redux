import request from 'superagent'

export const receivePosts = (subreddit, posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export function fetchPosts () {
  return (dispatch, getState) => {
    const subreddit = getState().currentSubreddit
    return request
      .get(`http://www.reddit.com/r/${subreddit}.json`)
      .end((err, res) => {
        if (err) {
          return
        }
        console.log(res.body.data)
        dispatch(receivePosts(subreddit, res.body.data.children))
      })
  }
}

export const enterNew = (word) => {
  return {
    type: 'ENTER_NEW',
    word
  }
}
