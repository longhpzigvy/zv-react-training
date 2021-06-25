import { createStore, combineReducers } from "redux";
import toDoListReducer from './reducers/toDoList'
import filters from './reducers/filters'

const reducer = combineReducers({
  toDoListReducer,
  filters,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);