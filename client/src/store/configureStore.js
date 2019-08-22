import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const storeMiddleware = applyMiddleware(...middlewares)

  const enhancers = [storeMiddleware]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  console.log("environment details", process.env.NODE_ENV, " on ", process.env.PORT)
  
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers/rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}
