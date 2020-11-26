import { fork, call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import { GET_ALL_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./todo.type";
import {
  getAllTodoAsync,
  addTodoAsync,
  updateTodoAsync,
  deleteTodoAsync,
} from "../../services/todo.service";
import {
  getAllTodoSucceed,
  addTodoSucceed,
  updateTodoSucceed,
  deleteTodoSucceed,
} from "./todo.action";

function* getTodoAllWorker() {
  try {
    const { data } = yield call(getAllTodoAsync);
    yield put(getAllTodoSucceed(data));
  } catch (error) {
    console.log("[getTodoAllWorker]", error);
  }
}

function* addTodoWorker(action) {
  try {
    const { data } = yield call(addTodoAsync, action.payload);
    yield put(addTodoSucceed(data));
  } catch (error) {
    console.log("[addTodoWorker]", error);
  }
}

function* updateTodoWorker(action) {
  try {
    const { data } = yield call(updateTodoAsync, action.payload);
    yield put(updateTodoSucceed(data));
  } catch (error) {
    console.log("[updateTodoWorker]", error);
  }
}

function* deleteTodoWorker(action) {
  try {
    yield call(deleteTodoAsync, action.payload);
    console.log(action.payload)
    yield put(deleteTodoSucceed(action.payload));
  } catch (error) {
    console.log("[deleteTodoWorker]", error);
  }
}

function* getTodoAllWatcher() {
  yield takeLatest(GET_ALL_TODO, getTodoAllWorker);
}

function* addTodoWatcher() {
  yield takeLatest(ADD_TODO, addTodoWorker);
}

function* updateTodoWatcher() {
  yield takeLatest(UPDATE_TODO, updateTodoWorker);
}

function* deleteTodoWatcher() {
  yield takeLatest(DELETE_TODO, deleteTodoWorker);
}

export default [
  fork(getTodoAllWatcher),
  fork(addTodoWatcher),
  fork(updateTodoWatcher),
  fork(deleteTodoWatcher),
];
