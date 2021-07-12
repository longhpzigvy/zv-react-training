import { createAction } from "redux-actions";
import {
  GET_ALL_TODO,
  GET_ALL_TODO_SUCCEED,
  ADD_TODO,
  ADD_TODO_SUCCEED,
  UPDATE_TODO,
  UPDATE_TODO_SUCCEED,
  DELETE_TODO,
  DELETE_TODO_SUCCEED,
} from "./todo.type";

export const getAllTodo = createAction(
    GET_ALL_TODO
)

export const getAllTodoSucceed = createAction(
    GET_ALL_TODO_SUCCEED,
    res => res
)

export const addTodo = createAction(
    ADD_TODO,
    req => req
)

export const addTodoSucceed = createAction(
    ADD_TODO_SUCCEED,
    res => res
)

export const updateTodo = createAction(
    UPDATE_TODO,
    req => req
)

export const updateTodoSucceed = createAction(
    UPDATE_TODO_SUCCEED,
    res => res
)

export const deleteTodo = createAction(
    DELETE_TODO,
    req => req
)

export const deleteTodoSucceed = createAction(
    DELETE_TODO_SUCCEED,
    res => res
)