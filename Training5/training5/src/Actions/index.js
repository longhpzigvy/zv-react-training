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

