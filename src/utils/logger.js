import logger from '@hyperapp/logger'

const log = (prevState, action, nextState) => {
  console.groupCollapsed('%c action', 'color: gray; font-weight: lighter;', action.name)
  console.log('%c prev state', 'color: #9E9E9E; font-weight: bold;', prevState)
  console.log('%c data', 'color: #03A9F4; font-weight: bold;', action.data)
  console.log('%c next state', 'color: #4CAF50; font-weight: bold;', nextState)
  console.groupEnd()
}

export default logger({log})
