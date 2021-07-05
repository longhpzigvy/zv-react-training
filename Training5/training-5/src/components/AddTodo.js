import { useCallback, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { addTodo } from "../actions/todos";
var _ = require("lodash");

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const add = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      dispatch(addTodo(trimmedText));
      setText("");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addThrottled = useMemo(() => _.throttle(add, 300), [text]);

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl onChange={(e) => handleChange(e)} value={text} />
      {todos.isCreating ? (
        <div className="spinner-border" role="status">
          <span className="sr-only"> </span>
        </div>
      ) : (
        <Button variant="outline-secondary" onClick={addThrottled}>
          Add
        </Button>
      )}
    </InputGroup>
  );
}
