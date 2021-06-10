import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { addTodo } from "../actions/todos";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      dispatch(addTodo(trimmedText));
      setText("");
    }
  };

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl onChange={(e) => handleChange(e)} value={text} />
      <Button variant="outline-secondary" onClick={() => add()}>
        Add
      </Button>
    </InputGroup>
  );
}
