import React from 'react'
import  {connect} from 'react-redux'
import {addPost} from '../actions'

let AddPost = ({dispatch}) => (
  <input
  placeholder="Enter a Squirell"
  onKeyUp={e => {
    AddPost(e, dispatch)

    <button
      onClick={e => dispatch(addPost('post')}
      >Post</button>

  }}
/>

)

export default connect()(AddPost)
