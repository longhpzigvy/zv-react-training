import { useCallback, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { createTaskAction } from "../actions/task";
var _ = require("lodash");

export default function CreateTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const add = () => {
    const trimmedText = text.trim();
    if (trimmedText) {
      dispatch(createTaskAction(trimmedText));
      setText("");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addThrottled = useMemo(() => _.throttle(add, 300), [text]);

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl onChange={(e) => handleChange(e)} value={text} />
      {tasks.isCreating ? (
        <div className="spinner-border" role="status">
          <span className="sr-only"> </span>
        </div>
      ) : (
        <Button variant="success" onClick={addThrottled}>
          Create
        </Button>
      )}
    </InputGroup>
  );
}
