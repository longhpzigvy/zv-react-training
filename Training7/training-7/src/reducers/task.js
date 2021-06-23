import * as types from "../actions/types";

const initialState = {
  list: [],
  isFetching: false,
  isCreating: false,
  error: "",
};

export function task(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TASK_REQUEST:
      return {
        ...state,
        isCreating: true,
      };
    case types.CREATE_TASK_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case types.CREATE_TASK_FAILURE:
      return {
        ...state,
        isCreating: false,
        error: action.payload,
      };

    case types.GET_TASKS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case types.GET_TASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case types.CHANGE_TASK_STATUS:
      return {
        ...state,
        list: state.list.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              status: action.payload.status,
            };
          }
          return task;
        }),
      };

    default:
      return state;
  }
}
