import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import "./App.css";
import { Container, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Col xs="6">
        <AddTodo />
        <FilterTodo />
        <TodoList />
      </Col>
    </Container>
  );
}

export default App;
