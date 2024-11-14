import { MINUS, PLUS } from './actionType';
import initialState from './state'

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLUS:
      return {
        count: state.count + 1
      }
    case MINUS:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}