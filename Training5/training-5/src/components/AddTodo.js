import { useCallback, useState, useMemo } from "react";
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

  const add = () => {
    const trimmedText = text.trim();
    console.log(text);
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
      <Button variant="outline-secondary" onClick={addThrottled}>
        Add
      </Button>
    </InputGroup>
  );
}
