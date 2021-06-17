import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { changeTaskStatusAction } from "../actions/task";

export default function TaskCard({ id, name, status }) {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (id, status) => {
      dispatch(changeTaskStatusAction({ id, status }));
    },
    [dispatch]
  );

  return (
    <Card style={{ margin: "5px" }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Button variant="primary" onClick={() => handleChange(id, status)}>
          {status}
        </Button>
      </Card.Body>
    </Card>
  );
}
