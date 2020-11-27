import React from "react";
import "./layout.scss";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {userLogout} from "../../redux/auth/auth.action"
import {bindActionCreators} from "redux"

const { Header, Content, Sider } = Layout;

const LayoutCustom = (props) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const {fullName} = useSelector(state => state.auth)
  const { children } = props;

  const handleLogout = () => {
    let dispatchLogout = bindActionCreators(userLogout, dispatch)
    dispatchLogout()
  }

  let navActive = location.pathname.includes("/app/users") ? "/app/users" : location.pathname

  return (
    <Layout style={{width: '100vw', minHeight: '100vh'}}>
      <Header
        className="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          className="d-flex justify-content-end"
        >
          <Menu.Item key="1">{fullName}</Menu.Item>
          <Menu.Item key="2" onClick={handleLogout}>Log out</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 64,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[`${navActive}`]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="/app" icon={<HomeOutlined />}>
              <Link to="/app">Home</Link>
            </Menu.Item>
            <Menu.Item key="/app/profile" icon={<UserOutlined />}>
              <Link to="/app/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="/app/users" icon={<NotificationOutlined />}>
              <Link to="/app/users">Users</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 50px", marginTop: 90, marginLeft: 200, marginBottom: 20}}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutCustom;
