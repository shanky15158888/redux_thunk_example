import asyncReducer from './asyncReducer';
import PostReducer from './postReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    asyncReducer,
    PostReducer
});