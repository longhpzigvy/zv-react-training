import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { fetchUsersAction } from "../actions/user";
import { Layout } from "antd";
import withAuth from "../hoc/WithAuth";

const { Content } = Layout;

const MainContent = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const paramId = props.location.pathname.split("/").pop();

  useEffect(() => {
    dispatch(fetchUsersAction(state.authentication.user));
  }, [state.authentication.user, dispatch]);

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
        {state.user.users &&
          state.user.users.map((user) =>
            user.id === paramId ? (
              <p key={user.id}>
                <span>{user.fullName}</span>
              </p>
            ) : (
              <p key={user.id}>
                <Link to={`/app/users/${user.id}`}>{user.fullName}</Link>
              </p>
            )
          )}
      </Content>
    </Layout>
  );
};

export default withAuth(withRouter(MainContent));
