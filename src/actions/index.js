import request from 'superagent'

export const receivePosts = (cityName, posts) => {
  console.log(posts)
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post)
  }
}

export function fetchPosts () {
  return (dispatch, getState) => {
    const cityName = getState().currentSubreddit
    return request
      // .get(`http://www.reddit.com/r/${cityName}.json`)
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5f7bcf238dc7056a7325948af9cb61be`)
      .end((err, res) => {
        if (err) {
          return
        }
        console.log([res.body])
        dispatch(receivePosts(cityName, [res.body]))
      })
  }
}

export const enterNew = (word) => {
  return {
    type: 'ENTER_NEW',
    word
  }
}
