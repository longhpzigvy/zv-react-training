import { useSelectorTodo } from "../helpers/useSelectorTodo";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
import { getTodos, searchTodo } from "../actions/todos";
import { InputGroup, FormControl, Col } from "react-bootstrap";
import TodoItem from "./TodoItem";
var _ = require("lodash");

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelectorTodo();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleChange = useCallback(
    (e) => {
      dispatch(searchTodo(e.target.value));
    },
    [dispatch]
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchDebounce = useMemo(() => _.debounce(handleChange, 1000), []);

  return (
    <Col xs="12">
      <InputGroup className="mb-3 mt-3">
        <FormControl onChange={searchDebounce} placeholder="Search.." />
      </InputGroup>
      <h1 style={{ color: "red" }}>Todo App</h1>
      {todos.list &&
        todos.list.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      {todos.error && <p>{todos.error}</p>}
    </Col>
  );
}
