import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  SEARCH_TODO,
} from "../actions/types";

const initialState = {
  list: [],
  completed: false,
  keyword: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        list: [...action.payload],
      };
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
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
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    case FILTER_TODO:
      return {
        ...state,
        completed: action.payload,
      };
    case SEARCH_TODO:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
}
