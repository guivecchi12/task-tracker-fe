import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    projects: projectReducer,
    tasks: taskReducer
});