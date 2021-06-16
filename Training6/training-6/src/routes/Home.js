import { Route, Switch, withRouter } from "react-router-dom";
import MainContent from "../components/MainContent";
import SubContent from "../components/SubContent";
import MyLayout from "../hoc/MyLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = (props) => {
  const authentication = useSelector((state) => state.authentication);

  useEffect(() => {
    !authentication.user && props.history.push("/login");
  });

  return (
    <MyLayout>
      <Switch>
        <Route path="/app/users" component={MainContent} />
        <Route
          path={["/app/myinfo", "/app/users/:id"]}
          component={SubContent}
        />
      </Switch>
    </MyLayout>
  );
};

export default withRouter(Home);
