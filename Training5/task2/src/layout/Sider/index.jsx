import React from 'react';
import { Layout, Menu } from 'antd'
import {
    Link,
} from "react-router-dom"; const { Sider } = Layout

const SiderPage = () => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item>
                    <Link to='/app'>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/app/users'>Users</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/app/my-info'>My Info</Link>
                </Menu.Item>

            </Menu>
        </Sider>

    )
}

export default SiderPage