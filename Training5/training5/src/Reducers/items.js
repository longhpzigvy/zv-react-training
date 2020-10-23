import * as Types from '../Constants/ActionTypes';

const initialState = {
    loading: false,
    items: [],
    error: ''
};


const myReducer = (state = initialState, action) => {
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
            return {
                loading: false,
                items: state.items.filter(item => item.id !== action.payload),
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
                ...state,
                loading: false,
                items: [...state.items, action.payload]
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
        case Types.UPDATE_ITEM_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: state.items.map(item => {
                    if (item.id === action.id) return action.item;
                    return item;
                })
            }
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


