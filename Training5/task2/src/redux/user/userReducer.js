
const initialState = {
    users: null,
    user: null
}

const userReduce = (state = initialState, action) => {
    switch (action.type) {
        case 'user/getUsers': {
            return {
                ...state,
                users: action.payload
            }
        }
        case 'user/getUser': {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state
    }
}

export default userReduce

