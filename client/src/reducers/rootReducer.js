import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HomeReducer from './Home/homeReducers';
import UserReducer from './User/userReducer';

const rootReducer = combineReducers({
  homeState: HomeReducer,
  userState: UserReducer,
  form: formReducer,
})

export default rootReducer;