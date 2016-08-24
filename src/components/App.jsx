import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import AddPost from './AddPost'
import PostContainer from '../containers/PostsContainer'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <SubredditContainer />
    <AddPost />
    <PostContainer />
  </div>
)

export default App
