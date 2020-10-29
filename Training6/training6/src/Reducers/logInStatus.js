import * as Types from '../Constants/index';

const initialState = {
    logInStatus: false
};

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.CHECK_USER_ACCOUNT:
            const account = action.payload.acc;
            if(account.id === 'admin' && account.password === 'admin') {
                return {
                    ...state,
                    logInStatus: true
                }
            }
            return {
                ...state
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