import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { fetchUserAction } from "../actions/user";
import { Layout } from "antd";

const { Content } = Layout;

const SubContent = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const paramId =
    props.location.pathname.indexOf("users") > -1 &&
    props.location.pathname.split("/").pop();

  useEffect(() => {
    const user = paramId ? { id: paramId } : state.authentication.user;
    dispatch(fetchUserAction(user));
  }, [dispatch, paramId, state.authentication.user]);

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
        {state.user.user && (
          <div>
            <p>{state.user.user.fullName}</p>
            <p>{state.user.user.email}</p>
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default withRouter(SubContent);
