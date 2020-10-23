import * as Types from '../Constants/ActionTypes';

const initialState = null;

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_ITEM_EDITING:
            return action.payload;
        default:
            return state;
    }
}

export default myReducer;