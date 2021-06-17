import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksAction } from "./actions/task";
import CreateTask from "./components/CreateTask";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.list);

  useEffect(() => {
    dispatch(getTasksAction());
  }, [dispatch]);

  return (
    <div className="App" style={{ width: "40%" }}>
      {tasks &&
        tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              name={task.name}
              status={task.status}
            />
          );
        })}
      <br />
      <CreateTask />
    </div>
  );
}

export default App;
