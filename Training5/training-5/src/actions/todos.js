import axios from "axios";
import * as action from "./types";

// GET TODOS
export const getTodos = () => async (dispatch) => {
  dispatch({ type: action.GET_TODOS_REQUEST });
  await axios
    .get("http://localhost:9000/todos")
    .then((res) =>
      dispatch({
        type: action.GET_TODOS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: action.GET_TODOS_FAILURE,
        payload: err,
      })
    );
};

// ADD TODO
export const addTodo = (name) => async (dispatch) => {
  dispatch({ type: action.ADD_TODO_REQUEST });
  const todo = { name: name, completed: false };
  await axios
    .post("http://localhost:9000/todos", todo)
    .then((res) =>
      dispatch({
        type: action.ADD_TODO_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: action.ADD_TODO_FAILURE,
        payload: err,
      })
    );
};

// DELETE TODO
export const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: action.DELETE_TODO_REQUEST });
  await axios
    .delete(`http://localhost:9000/todos/${id}/`)
    .then(() =>
      dispatch({
        type: action.DELETE_TODO_SUCCESS,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch({
        type: action.DELETE_TODO_FAILURE,
        payload: err,
      })
    );
};

// EDIT TODO
export const editTodo = (id, values) => async (dispatch) => {
  dispatch({ type: action.EDIT_TODO_REQUEST });
  await axios
    .put(`http://localhost:9000/todos/${id}/`, values)
    .then((res) =>
      dispatch({
        type: action.EDIT_TODO_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: action.EDIT_TODO_FAILURE,
        payload: err,
      })
    );
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
