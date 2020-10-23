import * as Types from '../Constants/ActionTypes';

const initialState = {
    loading: false,
    items: [],
    error: ''
};

const findIndex = (items, id) => {
    let result = -1;
    items.forEach((item, index) => {
        if(item.id === id) {
            result = index;
        }
    });
    return result;
}

const myReducer = (state = initialState, action) => {
    let index = -1;
    switch(action.type){
        case Types.FETCH_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.FETCH_ITEMS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case Types.FETCH_ITEMS_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload
            }

        //delete item
        case Types.DELETE_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.DELETE_ITEM_SUCCESS:
            index = findIndex(state, action.payload);
            const newItems = [...state.items];
            return {
                loading: false,
                items: newItems.splice(index, 1),
                error: ''
            }
        case Types.DELETE_ITEM_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default myReducer;


