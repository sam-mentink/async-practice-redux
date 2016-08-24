import {combineReducers} from 'redux'

import subreddits from './subreddits'
import posts from './posts'

export default combineReducers({
  subreddits,
  posts
})
