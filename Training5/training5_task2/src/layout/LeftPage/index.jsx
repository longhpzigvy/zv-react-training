import React from 'react';
import { Layout, Menu } from 'antd'
import {
    Link,
} from "react-router-dom"; const { Sider } = Layout

const LeftPage = () => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="vertical"
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key={1}>
                    <Link to='/app'>Home</Link>
                </Menu.Item>
                <Menu.Item key={2}>
                    <Link to='/app/users'>Users</Link>
                </Menu.Item>
                <Menu.Item key={3}>
                    <Link to='/app/my-info'>My Info</Link>
                </Menu.Item>

            </Menu>
        </Sider>

    )
}

export default LeftPage