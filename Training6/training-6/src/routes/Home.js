import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import MainContent from "../components/MainContent";
import MyLayout from "../hoc/MyLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import UserDetail from "../components/UserDetail";

const Home = (props) => {
  const authentication = useSelector((state) => state.authentication);

  useEffect(() => {
    !authentication.user && props.history.push("/login");
  }, [authentication.user, props.history]);

  return (
    <MyLayout>
      <Switch>
        <Route path="/app/users" component={MainContent} />
        <Route exact path="/app/myinfo" component={UserDetail} />
        <Redirect to={authentication.user ? "/app" : "/login"} />
      </Switch>
    </MyLayout>
  );
};

export default withRouter(Home);
