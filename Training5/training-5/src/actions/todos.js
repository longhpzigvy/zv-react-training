import axios from "axios";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  SEARCH_TODO,
} from "./types";

// GET TODOS
export const getTodos = () => async (dispatch) => {
  const res = await axios.get("http://localhost:9000/todos");
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};

// ADD TODO
export const addTodo = (name) => async (dispatch) => {
  const todo = { name: name, completed: false };
  const res = await axios.post("http://localhost:9000/todos", todo);
  dispatch({
    type: ADD_TODO,
    payload: res.data,
  });
};

// DELETE TODO
export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:9000/todos/${id}/`);
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

// EDIT TODO
export const editTodo = (id, values) => async (dispatch) => {
  const res = await axios.put(`http://localhost:9000/todos/${id}/`, values);
  dispatch({
    type: EDIT_TODO,
    payload: res.data,
  });
};

// FILTER TODO
export const filterTodo = (values) => async (dispatch) => {
  dispatch({
    type: FILTER_TODO,
    payload: values,
  });
};

// SEARCH TODO
export const searchTodo = (values) => async (dispatch) => {
  dispatch({
    type: SEARCH_TODO,
    payload: values,
  });
};
