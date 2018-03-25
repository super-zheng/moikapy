//initial state
const initialState= {
  status:"",
  display_name:"",
  error:""
}
//define a reducer with an initalized state and logic to handle action
function TwitchApp(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_REQUEST':
      const requested = Object.assign({}, state, {
        status: action.status
      })
      return requested
    case 'FETCH_SUCCESS':
      const successful = Object.assign({}, state, {
        status: action.status,
        display_name: action.streams
      })
      return successful
    case 'FETCH_FAILURE':
      const failed = Object.assign({}, state, {
        status: action.status,
        error: action.error
      })
      return failed
    default:
      return state
  }
}

export default TwitchApp
