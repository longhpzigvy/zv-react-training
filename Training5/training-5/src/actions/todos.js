import axios from "axios";
import * as action from "./types";

// GET TODOS
export const getTodos = () => async (dispatch) => {
  dispatch({ type: action.GET_TODOS_REQUEST });
  try {
    const res = await axios.get("http://localhost:9000/todos");
    dispatch({
      type: action.GET_TODOS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: action.GET_TODOS_FAILURE,
      payload: err,
    });
  }
};

// ADD TODO
export const addTodo = (name) => async (dispatch) => {
  dispatch({ type: action.ADD_TODO_REQUEST });
  try {
    const todo = { name: name, completed: false };
    const res = await axios.post("http://localhost:9000/todos", todo);
    dispatch({
      type: action.ADD_TODO_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: action.ADD_TODO_FAILURE,
      payload: err,
    });
  }
};

// DELETE TODO
export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: action.DELETE_TODO_REQUEST, payload: id });
  try {
    await axios.delete(`http://localhost:9000/todos/${id}/`);
    dispatch({
      type: action.DELETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: action.DELETE_TODO_FAILURE,
      payload: { err: err, id: id },
    });
  }
};

// EDIT TODO
export const editTodo = (id, values) => async (dispatch) => {
  dispatch({ type: action.EDIT_TODO_REQUEST, payload: id });
  try {
    const res = await axios.put(`http://localhost:9000/todos/${id}/`, values);
    dispatch({
      type: action.EDIT_TODO_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: action.EDIT_TODO_FAILURE,
      payload: { err: err, id: id },
    });
  }
};

// FILTER TODO
export const filterTodo = (values) => async (dispatch) => {
  dispatch({
    type: action.FILTER_TODO,
    payload: values,
  });
};

// SEARCH TODO
export const searchTodo = (values) => async (dispatch) => {
  dispatch({
    type: action.SEARCH_TODO,
    payload: values,
  });
};
