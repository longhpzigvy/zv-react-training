import { useSelector, useDispatch } from "react-redux";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import SubContent from "./SubContent";
import { useEffect } from "react";
import { fetchUsersAction, fetchUserAction } from "../actions/user";
import { Layout } from "antd";

const { Content } = Layout;

const MainContent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.authentication.user);

  useEffect(() => {
    dispatch(fetchUserAction());
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Switch>
          <Route exact path="/app/myinfo">
            <div>
              <p>{user.fullName}</p>
              <p>{user.email}</p>
            </div>
          </Route>
          <Route path="/app/users">
            {error === 401 ? (
              <Redirect to="/app" />
            ) : (
              <div>
                {users &&
                  users.map((user) => (
                    <p key={user.id}>
                      <Link to={`/app/users/${user.id}`}>{user.fullName}</Link>
                    </p>
                  ))}
                <Route exact path="/app/users/:id" component={SubContent} />
              </div>
            )}
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default MainContent;
