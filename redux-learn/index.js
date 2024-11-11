
import { PLUS, MINUS } from "./store/actionType"
import store from "./store"

const resultDom = window.document.querySelector('.counter')
const plusBtn = window.document.querySelector('.plusBtn')
const minusBtn = window.document.querySelector('.minusBtn')

// const OPERATION_ENUM = {
//   PLUS: 'PLUS',
//   MINUS: 'MINUS'
// }

// const state = {
//   counter: 0
// }

store.subscribe(render)

store.subscribe(() => {
  console.log('测试')
})

function render() {
  const state = store.getState()
  resultDom.innerHTML = state.count;
}

function clickHandle(type) {
  store.dispatch({ type })
  // switch (type) {
  //   case OPERATION_ENUM.MINUS:
  //     state.counter -= 1;
  //     render()
  //     break;
  //   case OPERATION_ENUM.PLUS:
  //     state.counter += 1;
  //     render()
  //     break;
  //   default:
  //     break;
  // }
}


const bindEvent = () => {
  plusBtn.addEventListener("click", () => clickHandle(PLUS), false)
  minusBtn.addEventListener("click", () => clickHandle(MINUS), false)
}

const init = () => {
  render()
  bindEvent()
}
window.onload = () => {
  init()
}