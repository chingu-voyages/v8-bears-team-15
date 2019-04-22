import { combineReducers } from 'redux';
import HomeReducer from './Home/homeReducers';
import UserReducer from './User/userReducer';

const rootReducer = combineReducers({
  homeState: HomeReducer,
  userReducer: UserReducer,
})

export default rootReducer;