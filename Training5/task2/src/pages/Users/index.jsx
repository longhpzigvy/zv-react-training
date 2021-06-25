import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Layout, Menu } from 'antd'
import BasicLayout from '../../layout';

const { Content, Sider } = Layout

const selectUsers = state => state.users.users
const UserPage = ({ children }) => {
    const users = useSelector(selectUsers)

    if (!users) {
        return (
            <BasicLayout>
                <h3>You have no permissions to see the others</h3>
            </BasicLayout>)
    }
    const otherUser = users.filter(user => user.role !== 'Admin')
    return (
        <BasicLayout>
            <Layout>
                <Content >
                    <Layout >
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                style={{ height: '100%' }}
                            >
                                {otherUser.map(({ id, fullName }) => (
                                    <Menu.Item>
                                        <Link to={`/app/users/${id}`}>{fullName}</Link>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280, background: 'white' }}>
                            {children}
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </BasicLayout>
    )
}

export default UserPage