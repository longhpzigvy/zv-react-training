import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";
import { changeTaskStatusAction } from "../actions/task";
var _ = require("lodash");

export default function TaskCard({ id, name, status }) {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (id, status) => {
      dispatch(changeTaskStatusAction({ id, status }));
    },
    [dispatch]
  );
  const handleChangeThrottle = useMemo(
    () => _.throttle(handleChange, 4000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Card style={{ margin: "5px" }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Button
          variant="primary"
          onClick={() => handleChangeThrottle(id, status)}
        >
          {status}
        </Button>
      </Card.Body>
    </Card>
  );
}
