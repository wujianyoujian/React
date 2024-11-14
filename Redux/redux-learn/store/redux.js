
const cbs = []
const redux = {}

export function createStore(reducer) {
  createReduxStore(reducer)
  const getState = createGetter(reducer)
  const dispatch = createDispatch(reducer)
  return { subscribe, getState, dispatch }
}

function createGetter(reducer) {
  return function () {
    return reducer(redux._state)
  }
}

function createReduxStore(reducer) {
  let _state = reducer()
  Object.defineProperty(redux, '_state', {
    get() {
      return _state
    },
    set(newValue) {
      if (_state === newValue) return
      _state = newValue
      publish()
    }
  })
}

function createDispatch(reducer) {
  return function (action) {
    redux._state = reducer(redux._state, action)
  }
}

function publish() {
  cbs.forEach(cb => cb())
}

function subscribe(cb) {
  if (cbs.includes(cb)) return
  cbs.push(cb)
}