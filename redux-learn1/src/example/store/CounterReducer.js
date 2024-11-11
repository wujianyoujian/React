const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch (action?.type) {
    case 'PLUS':
      return {
        value: state.value + 1
      }
    case 'MINUS':
      return {
        value: state.value - 1
      }
    default:
      return state
  }
} 