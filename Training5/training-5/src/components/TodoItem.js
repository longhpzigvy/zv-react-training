import { useRef, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { deleteTodo, editTodo } from "../actions/todos";
import { truncate } from "lodash";

export default function TodoItem({ id, name, completed }) {
  const inputRef = useRef(true);
  const [disabled, setDisabled] = useState(truncate);
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (id, value) => {
      dispatch(editTodo(id, { completed: !value }));
    },
    [dispatch]
  );

  const changeFocus = useCallback(() => {
    setDisabled(false);
    inputRef.current.focus();
  }, []);

  const update = useCallback(
    (id, value, e) => {
      if (e.which === 13) {
        dispatch(editTodo(id, { name: value }));
        setDisabled(true);
      }
    },
    [dispatch]
  );

  return (
    <Card style={{ background: completed ? "#90ee90" : "" }}>
      <Card.Body>
        <Row>
          <Col xs="8">
            <textarea
              ref={inputRef}
              style={{ border: "none" }}
              disabled={disabled}
              defaultValue={name}
              onKeyPress={(e) => update(id, inputRef.current.value, e)}
            />
          </Col>
          <Col xs="4" style={{ textAlign: "right" }}>
            <button
              className="btn btn-xs btn-success"
              onClick={() => handleChange(id, completed)}
            >
              ✓
            </button>{" "}
            <button
              className="btn btn-xs btn-info"
              onClick={() => changeFocus()}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path>
              </svg>
            </button>{" "}
            <button
              className="btn btn-xs btn-danger"
              onClick={() => handleDelete(id)}
            >
              X
            </button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
