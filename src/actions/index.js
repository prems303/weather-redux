import request from 'superagent'

export const receivePosts = (cityName, posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts
  }
}

export function fetchPosts () {
  return (dispatch) => {
    return request
      .get('http://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=5f7bcf238dc7056a7325948af9cb61be')
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receivePosts('Auckland', res.body))
      })
  }
}
