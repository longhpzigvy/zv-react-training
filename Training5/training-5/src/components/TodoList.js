import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos, searchTodo } from "../actions/todos";
import { InputGroup, FormControl, Col } from "react-bootstrap";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const filterTodos = data.completed
    ? data.list.filter((todo) => todo.completed === data.completed)
    : data.list;
  const todos = filterTodos.filter((todo) => todo.name.includes(data.keyword));

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(searchTodo(e.target.value));
  };

  return (
    <Col xs="12">
      <InputGroup className="mb-3 mt-3">
        <FormControl onChange={(e) => handleChange(e)} placeholder="Search.." />
      </InputGroup>
      <h1 style={{ color: "red" }}>Todo App</h1>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
    </Col>
  );
}
