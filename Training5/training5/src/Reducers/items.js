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
            index = findIndex(state.items, action.payload);
            const term = [...state.items];
            return {
                loading: false,
                items: term,
                error: ''
            }
        case Types.DELETE_ITEM_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload
            }

        //add item
        case Types.ADD_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.ADD_ITEM_SUCCESS:
            return {
                ...state
            }
        case Types.ADD_ITEM_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload
            }
        
        //Update item
        case Types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Types.UPDATE_ITEM_SUCCESS:
            index = findIndex(state.items, action.id);
            const newItems = [...state.items];
            newItems[index] = action.item;
            return {
                ...state,
                items: newItems
            }
        case Types.UPDATE_ITEM_FAILURE:
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


