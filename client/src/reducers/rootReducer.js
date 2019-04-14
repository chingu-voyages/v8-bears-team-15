import { combineReducers } from 'redux';
import HomeReducer from './Home/homeReducers';

const rootReducer = combineReducers({
  homeState: HomeReducer,
})

export default rootReducer;