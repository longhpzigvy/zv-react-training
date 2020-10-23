import * as Types from '../Constants/ActionTypes';

const initialState = false;

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.OPEN_FORM:
            const openState = true;
            return openState;
        case Types.CLOSE_FORM:
            const closeState = false;
            return closeState;
        default:
            return state;
    }
}

export default myReducer;