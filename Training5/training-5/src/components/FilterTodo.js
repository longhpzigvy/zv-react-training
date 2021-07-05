import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { filterTodo } from "../actions/todos";

export default function FilterTodo() {
  const dispatch = useDispatch();
  const filter = useCallback(
    (e) => {
      dispatch(filterTodo(e.target.checked));
    },
    [dispatch]
  );

  return <Form.Check type="checkbox" label="Completed" onChange={filter} />;
}
