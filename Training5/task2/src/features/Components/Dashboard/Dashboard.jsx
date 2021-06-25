import React from 'react'
import {

    Link
} from "react-router-dom";
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;


const DashBoard = (props) => {

    const { children } = props;
    return (
        <Layout>
            <Header className="header">
                <div className="logo" style={{ color: 'white' }}>Zigvy Logo
                    <Avatar size='large' icon={<UserOutlined />} style={{ float: 'right' }} />
                </div>
            </Header>
            <Layout>
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
                            <Link to='/app/users'>User</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/app/my-info'>My Info</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: '50px',
                            minHeight: 280,
                            background: 'white'
                        }}
                    > {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer>Zigvy Corp</Footer>
        </Layout>
    )
}

export default DashBoard