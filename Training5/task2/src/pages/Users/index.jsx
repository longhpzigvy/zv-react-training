import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {
    LoadingOutlined,
  } from '@ant-design/icons';

import { Layout, Menu, notification } from 'antd'
import { getUsers } from '../../redux/actionCreators/users';

const { Content, Sider } = Layout
const selectUsers = state => state.users.users

const UserPage = ({ children }) => {
    const [others, setOther] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getUsers())
    }, [])
    const users = useSelector(selectUsers)
    // const { users, isFetching } = usersState
    const error = useSelector(state => state.users.error)
    const isFetching = useSelector(state => state.users.isFetching)


    useEffect(() => {
        if (error) {
            notification.open({
                message: 'Permission fail',
                description: error,
            });
            history.push('/app')
        }
        if (users) {
            const newUser = users.filter(user => user.role !== 'Admin')
            setOther([...newUser])
        }

    }, [error, users])
    if (isFetching) {
        return <h4>Data Loading...<LoadingOutlined /></h4>
    }



    return (
        <Layout>
            <Content >
                <Layout >
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            style={{ height: '100%' }}
                        >
                            {others.map(({ id, fullName }) => (
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