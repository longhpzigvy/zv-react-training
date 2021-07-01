import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd'
import { getUsers } from '../../redux/actionCreators/users';

const { Content, Sider } = Layout
const selectUsers = state => state.users.users

const UserPage = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const users = useSelector(selectUsers)
    const error = useSelector(state => state.users.error)

    if (error && error.response.status === 401) {
        return <h4>{error.response.data.error}</h4>
    }
    if (!users) {
        return (<h3>Users Page</h3>)
    }
    const otherUser = users.filter(user => user.role !== 'Admin')
    return (
        <Layout>
            <Content >
                <Layout >
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            style={{ height: '100%' }}
                        >
                            {otherUser.map(({ id, fullName }) => (
                                <Menu.Item key={id}>
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
    )
}

export default UserPage