import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.authentication.user);
  return (
    <Switch>
      <Route path="/app" component={Home} />
      <Route exact path="/login" component={Login} />
      <Redirect to={user ? "/app" : "/login"} />
    </Switch>
  );
};

export default App;
