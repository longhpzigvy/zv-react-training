import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { addTodo } from "../actions/todos";
var _ = require("lodash");

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const add = useCallback(() => {
    const trimmedText = text.trim();
    if (trimmedText) {
      dispatch(addTodo(trimmedText));
      setText("");
    }
  }, [dispatch, text]);
  const addThrottled = _.throttle(add, 3000);

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl onChange={(e) => handleChange(e)} value={text} />
      <Button variant="outline-secondary" onClick={() => addThrottled()}>
        Add
      </Button>
    </InputGroup>
  );
}
