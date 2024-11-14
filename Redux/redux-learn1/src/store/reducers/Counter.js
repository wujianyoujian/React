import { initialCounter } from "../states/counter";

export default function CounterReducer(state = initialCounter, action) {
  const { type, payload } = action

  switch (type) {
    case 'PLUS':
      return { ...state, value: state.value + payload };
    case 'MINUS':
      return { ...state, value: state.value - payload };
    default:
      return { ...state }
  }
}
