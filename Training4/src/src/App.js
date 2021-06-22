import "./App.css";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/task1">Task1</Link>
          </li>
          <li>
            <Link to="/task2">Task2</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/task1">
            <Task1 />
          </Route>
          <Route path="/task2">
            <Task2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
