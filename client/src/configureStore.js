import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'


import loggerMiddleware from '../src/middleware/logger';
import rootReducer from '../src/reducers/rootReducer';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const storeMiddleware = applyMiddleware(...middlewares)

  const enhancers = [storeMiddleware]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
