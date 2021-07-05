import * as todoAction from "../actions/types";

const initialState = {
  list: [],
  completed: false,
  keyword: "",
  isFetching: false,
  isCreating: false,
  isEditingById: {},
  isDeletingById: {},
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const tmpIsEditingById = { ...state.isEditingById };
  const tmpIsDeletingById = { ...state.isDeletingById };

  switch (action.type) {
    case todoAction.GET_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case todoAction.GET_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case todoAction.GET_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case todoAction.ADD_TODO_REQUEST:
      return {
        ...state,
        isCreating: true,
      };
    case todoAction.ADD_TODO_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case todoAction.ADD_TODO_FAILURE:
      return {
        ...state,
        isCreating: false,
        error: action.payload,
      };

    case todoAction.EDIT_TODO_REQUEST:
      tmpIsEditingById[action.payload] = true;
      return {
        ...state,
        isEditingById: tmpIsEditingById,
      };
    case todoAction.EDIT_TODO_SUCCESS:
      tmpIsEditingById[action.payload.id] = false;
      return {
        ...state,
        isEditingById: tmpIsEditingById,
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
      tmpIsEditingById[action.payload.id] = false;
      return {
        ...state,
        isEditingById: tmpIsEditingById,
        error: action.payload.err,
      };

    case todoAction.DELETE_TODO_REQUEST:
      tmpIsDeletingById[action.payload] = true;
      return {
        ...state,
        isDeletingById: tmpIsDeletingById,
      };
    case todoAction.DELETE_TODO_SUCCESS:
      tmpIsDeletingById[action.payload] = false;
      return {
        ...state,
        isDeletingById: tmpIsDeletingById,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    case todoAction.DELETE_TODO_FAILURE:
      tmpIsDeletingById[action.payload.id] = false;
      return {
        ...state,
        isDeletingById: tmpIsDeletingById,
        error: action.payload.err,
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
