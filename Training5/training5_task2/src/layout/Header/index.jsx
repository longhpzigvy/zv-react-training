import React from "react";
import { Layout, Avatar, Image, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getTokenSuccess } from "../../redux/actionCreators/authorization";
import { Link } from "react-router-dom";
const { Header } = Layout;

const HeaderPage = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(getTokenSuccess({ token: "" })); //logout -> reset token
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="app/my-info"> Profile </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Button onClick={handleLogOut}>Log Out</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header" style={{ display: "flex" }}>
      <div className="logo" style={{width: "90%" }}>
        <Link to="app"> Zigvy </Link>
      </div>
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        overlayStyle={{ float: "right" }}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <p>USER</p>
        </a>
      </Dropdown>
      ,
    </Header>
  );
};
export default HeaderPage;
