import * as Types from '../Constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const openForm = () => {
    return {
        type: Types.OPEN_FORM
    }
};
export const closeForm = () => {
    return {
        type: Types.CLOSE_FORM
    }
}

// {/*Fetch API get Items*/}
export const fetchItems = () => {
    return dispatch => {
        dispatch(fetchItemsRequest());
        callApi('todos', 'GET', null).then(res => {
            const items = res.data;
            dispatch(fetchItemsSuccess(items));
        }).catch(err => {
            const errMessage = err.message;
            dispatch(fetchItemsFailure(errMessage));
        });
    }
}
export const fetchItemsRequest = () => {
    return {
        type: Types.FETCH_ITEMS_REQUEST
    }
}
export const fetchItemsSuccess = items => {
    return {
        type: Types.FETCH_ITEMS_SUCCESS,
        payload: items
    }
}
export const fetchItemsFailure = err => {
    return {
        type: Types.FETCH_ITEMS_FAILURE,
        payload: err
    }
}


//Delete item
export const deleteItem = (id) => {
    return dispatch => {
        dispatch(deleteItemRequest());
        callApi(`todos/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteItemSuccess(id));
            //dispatch(fetchItems());
        }).catch(err => {
            const errMessage = err.message;
            dispatch(deleteItemFailure(errMessage));
        })
    }
}
export const deleteItemRequest = () => {
    return {
        type: Types.DELETE_ITEM_REQUEST
    }
}
export const deleteItemSuccess = id => {
    return {
        type: Types.DELETE_ITEM_SUCCESS,
        payload: id
    }
}
export const deleteItemFailure = err => {
    return {
        type: Types.DELETE_ITEM_FAILURE,
        payload: err
    }
}

//Add item
export const addItem = (item) => {
    return dispatch => {
        dispatch(addItemRequest());
        callApi('todos', 'POST', item).then(res => {
            dispatch(addItemSuccess(item));
            //dispatch(fetchItems());
        }).catch(err => {
            const errMessage = err.message;
            dispatch(addItemFailure(errMessage));
        })
    }
}
export const addItemRequest = () => {
    return {
        type: Types.ADD_ITEM_REQUEST
    }
}
export const addItemSuccess = item => {
    return {
        type: Types.ADD_ITEM_SUCCESS,
        payload: item
    }
}
export const addItemFailure = err => {
    return {
        type: Types.ADD_ITEM_FAILURE,
        payload: err
    }
}

//Update item
export const updateItem = (item, id) => {
    return (dispatch) => {
        dispatch(updateItemRequest());
        callApi(`todos/${id}`, 'PUT', item).then(res => {
            dispatch(updateItemSuccess(item, id));
            //dispatch(fetchItems());
        }).catch(err => {
            const errMessage = err.message;
            dispatch(updateItemFailure(errMessage));
        })
    }
}
export const updateItemRequest = _ => {
    return {
        type: Types.UPDATE_ITEM_REQUEST
    }
}
export const updateItemSuccess = (item, id) => {
    return {
        type: Types.UPDATE_ITEM_SUCCESS,
        item,
        id
    }
}
export const updateItemFailure = err => {
    return {
        type: Types.UPDATE_ITEM_FAILURE,
        payload: err
    }
}


//Get item wanna editing
export const getItemEditing = item => {
    return {
        type: Types.GET_ITEM_EDITING,
        payload: item
    }
}