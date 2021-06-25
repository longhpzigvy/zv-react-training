import React, { useEffect } from 'react'
import DashBoard from '../Dashboard/Dashboard'
import { useSelector, } from 'react-redux';
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider, Content } = Layout


const UserPage = ({ children }) => {
    const users = useSelector(state => state.users.entities.users)
    const user = useSelector(state => state.users.entities.user)
    const otherUser = users.filter(other => other.id !== user.id)
    console.log(otherUser);
    return (
        <DashBoard>
            <Layout>
                <Sider className="site-layout-background" width={200}>
                    <Menu style={{ height: '100%' }}>

                        {otherUser.map(({ fullName, id }, index) => (
                            <Menu.Item key={index}>
                                <Link to={`/app/users/${id}`} >{fullName}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>

                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
            </Layout>
        </DashBoard>
    )
}

export default UserPage