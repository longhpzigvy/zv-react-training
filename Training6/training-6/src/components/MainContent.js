import { useSelector, useDispatch } from "react-redux";
import { Route, Link, Switch } from "react-router-dom";
import SubContent from "./SubContent";
import { useEffect } from "react";
import { fetchUsersAction } from "../actions/user";
import { Layout } from "antd";

const { Content } = Layout;

const MainContent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <div>
        {users &&
          users.map((user) => (
            <p key={user.id}>
              <Link to={`/app/users/${user.id}`}>{user.fullName}</Link>
            </p>
          ))}
      </div>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Switch>
          <Route exact path="/app/users/:id" component={SubContent} />
          <Route
            path="*"
            render={() => <p style={{ textAlign: "right" }}>Welcome</p>}
          />
        </Switch>
      </Content>
    </Layout>
  );
};

export default MainContent;
