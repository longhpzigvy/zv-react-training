import { combineReducers } from "redux";
import { todosReducer } from "../todo/todo.reducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
});
