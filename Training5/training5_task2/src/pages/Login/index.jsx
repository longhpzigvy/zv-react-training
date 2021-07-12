import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, Button, Input, notification } from "antd";
import { getToken } from "../../redux/actionCreators/authorization";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const token = useSelector((state) => state.authorization.token);
  const error = useSelector((state) => state.authorization.error);

  useEffect(() => {
    if (token) {
      history.push("/app");
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      notification.open({
        message: "Login fail",
        description: error,
      });
    }
  }, [error]);



  const handeLogin = (e) => {
    e.preventDefault();
    dispatch(getToken(user));
  };


  return (
    <Card title="Login" style={{ margin: "auto", width: 300 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={handeLogin}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
