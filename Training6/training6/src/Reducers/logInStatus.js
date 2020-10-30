import * as Types from '../Constants/index';

const initialState = {
    loading: false,
    logInStatus: false,
    error: ''
};

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                logInStatus: true
            }
        case Types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case Types.LOG_OUT:
            return {
                ...state,
                logInStatus: false
            }
        default:
            return state;
    }
}

export default myReducer;