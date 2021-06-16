import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined, ProfileOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = (props) => {
  const user = useSelector((state) => state.authentication.user);

  const selected =
    props.location.pathname === "/app"
      ? "1"
      : props.location.pathname === "/app/myinfo"
      ? "3"
      : "2";

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selected}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/app">Home</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UserOutlined />}
          disabled={user && user.role === "Admin" ? false : true}
        >
          <Link to="/app/users">User</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ProfileOutlined />}>
          <Link to="/app/myinfo">My Info</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(Sidebar);
