import { combineReducers } from 'redux';
import  userReducer from './User/reducer';
import  userDetailReducer from './User/Detail/reducer';

export default combineReducers({
    userReducer,
    userDetailReducer
})
