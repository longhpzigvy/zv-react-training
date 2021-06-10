import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { filterTodo } from "../actions/todos";

export default function AddTodo() {
  const dispatch = useDispatch();

  const filter = (e) => {
    dispatch(filterTodo(e.target.checked));
  };

  return (
    <Form.Check type="checkbox" label="Completed" onChange={(e) => filter(e)} />
  );
}
