import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postFormReducer from './postFormReducer';
import postListReducer from './postListReducer';
import postListReducer2 from './postListReducer2';

export default combineReducers({
    auth: authReducer,
    postForm: postFormReducer,
    postlist: postListReducer,
    postlist2 : postListReducer2
});