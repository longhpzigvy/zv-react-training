import { handleActions } from "redux-actions";
import {
  getAllTodoSucceed,
  addTodoSucceed,
  updateTodoSucceed,
  deleteTodoSucceed,
} from "./todo.action";

export const initialTodoState = {
  listTodo: [],
};

export const todosReducer = handleActions(
  new Map([
    [
      getAllTodoSucceed,
      (state, action) => ({
        ...state,
        listTodo: [...action.payload],
      }),
    ],
    [
      addTodoSucceed,
      (state, action) => ({
        ...state,
        listTodo: [...state.listTodo, action.payload],
      }),
    ],
    [
      updateTodoSucceed,
      (state, action) => ({
        ...state,
        listTodo: [
          ...state.listTodo.map((todo) => {
            if (todo.id === action.payload.id) {
              todo = action.payload;
            }

            return todo;
          }),
        ],
      }),
    ],
    [
      deleteTodoSucceed,
      (state, action) => ({
        ...state,
        listTodo: [
          ...state.listTodo.filter((todo) => todo.id !== action.payload),
        ],
      }),
    ],
  ]),
  initialTodoState
);
