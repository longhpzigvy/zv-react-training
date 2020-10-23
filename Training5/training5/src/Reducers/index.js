import {combineReducers} from 'redux';
import items from './items';
import display from './display';

const myReducer = combineReducers({
    items,
    display
});

export default myReducer;