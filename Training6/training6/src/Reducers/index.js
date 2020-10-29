import {combineReducers} from 'redux';
import task from './task';
import logInStatus from './logInStatus';

const myReducer = combineReducers({
    task,
    logIn: logInStatus 
})

export default myReducer;