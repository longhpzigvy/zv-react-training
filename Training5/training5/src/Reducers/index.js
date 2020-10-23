import {combineReducers} from 'redux';
import items from './items';
import display from './display';
import itemEditing from './itemEditing';

const myReducer = combineReducers({
    items,
    display,
    itemEditing
});

export default myReducer;