import * as todoAction from "../actions/types";

const initialState = {
  list: [],
  completed: false,
  keyword: "",
  loading: false,
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case todoAction.GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoAction.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case todoAction.GET_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case todoAction.ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoAction.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, action.payload],
      };
    case todoAction.ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case todoAction.EDIT_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoAction.EDIT_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              name: action.payload.name,
              completed: action.payload.completed,
            };
          }
          return todo;
        }),
      };
    case todoAction.EDIT_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case todoAction.DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoAction.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    case todoAction.DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case todoAction.FILTER_TODO:
      return {
        ...state,
        completed: action.payload,
      };

    case todoAction.SEARCH_TODO:
      return {
        ...state,
        keyword: action.payload,
      };

    default:
      return state;
  }
}
