import { initialState } from "../state/state";
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK_SUCCESS":
            return {
                ...state,
                task: [...state.task, action.payload],
            };
        case "CHANGE_NETWORK_STATUS":
            return {
                ...state,
                channelStatus: action.payload.channelStatus,
            };
        case "CHANGE_TASK_STATUS":
            return {
                ...state,
                task: state.task.map((item) => {
                    if (item.task === action.payload.task) {
                        return {
                            ...item,
                            status: action.payload.status,
                        };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
}
