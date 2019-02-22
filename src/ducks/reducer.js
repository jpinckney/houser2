const initialState = {
  house: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HOUSE:
      return { ...state, house: action.payload }
      default:
      return state
    }
}