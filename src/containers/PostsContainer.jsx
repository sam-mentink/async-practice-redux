import {connect} from 'react-redux'

import Post from '../components/Post'

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default connect (
  mapStateToProps
)(Post)
