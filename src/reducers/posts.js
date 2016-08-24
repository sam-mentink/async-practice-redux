const post = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
    return [
      ...state,
      {
      id: action.id,
      post: action.post
      }
    ]
    default:
      return state
  }
}

export default post
