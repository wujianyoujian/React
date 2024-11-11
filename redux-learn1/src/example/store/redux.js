const _redux = {}
const _callBack = []

export default function CreateStroe(reducer) {
  createState(reducer)
  const dispatch = createDispatch(reducer)
  const subscribe = createSubscribe(reducer)

  return {
    dispatch,
    subscribe,
    getState
  }
}

function createState(reducer) {
  let _state = reducer()

  Object.defineProperty(_redux, '_state', {
    get: () => {
      return _state
    },
    set: (newValue) => {
      if (_state === newValue) return
      _state = newValue
      publish()
    }
  })
}

function createDispatch(reducer) {
  return function (action) {
    _redux._state = reducer(_redux._state, action)
  }
}

function createSubscribe() {
  return function (callBack) {
    if (_callBack.includes(callBack)) {
      return
    }
    _callBack.push(callBack)
  }
}

function publish() {
  _callBack.forEach(cb => {
    cb(_redux._state)
  })
}

function getState() {
  return _redux?._state
}