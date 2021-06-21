import { withRouter, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined, ProfileOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = (props) => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={props.location.pathname}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="/app" icon={<HomeOutlined />}>
          <Link to="/app">Home</Link>
        </Menu.Item>
        <Menu.Item key="/app/users" icon={<UserOutlined />}>
          <Link to="/app/users">User</Link>
        </Menu.Item>
        <Menu.Item key="/app/myinfo" icon={<ProfileOutlined />}>
          <Link to="/app/myinfo">My Info</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(Sidebar);
