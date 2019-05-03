const logger = store => {
  return (next) => {
     return (action) => {
      console.group(action.type)
      console.info('dispatching', action)
      let result = next(action)
      console.log('next state', store.getState())
      console.groupEnd()
      return result
     }
  }
}

export default logger;