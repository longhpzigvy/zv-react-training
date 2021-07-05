import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../actions/authentication";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication);

  const onFinish = useCallback(
    (values) => {
      dispatch(loginAction(values));
    },
    [dispatch]
  );

  useEffect(() => {
    authentication.user && props.history.push("/app");
  }, [authentication.user, props.history]);

  return (
    <div style={{ padding: "24px" }}>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {authentication.isAuthenticating ? (
          <Spin />
        ) : (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        )}
      </Form>
      {authentication.error && (
        <p style={{ color: "red" }}>{authentication.error}</p>
      )}
    </div>
  );
};

export default withRouter(Login);
