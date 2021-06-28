import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Button, Input, notification } from 'antd'
// import { getToken } from '../../redux/actionCreators/authorization';
// import { fetchAuth, fetchUsers, fetchUser } from '../../redux/auth/authSlice'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const token = useSelector(state => state.authorization.token)
    const history = useHistory()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: "/" } };

    const error = useSelector(state => state.authorization.error)

    useEffect(() => {
        if (token) {
            history.replace(from)
            dispatch({type:'GET_USERS_SAGA'})
            dispatch({type:'GET_USER_SAGA'})
        }
    }, [token])

    useEffect(() => {
        if (error) {
            notification.open({
                message: 'Login fail',
                description: error,
            });
        }
    }, [error])
    const dispatch = useDispatch()

    const handleEmail = e => {
        setUser({ ...user, email: e.target.value })
    }
    const handlePassword = e => {
        setUser({ ...user, password: e.target.value })
    }
    const onLogin = () => {
        dispatch({ type: 'GET_TOKEN_SAGA', payload: user })
    }


    return (
        <Card title="Login" style={{ margin: 'auto', width: 300 }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        onChange={handleEmail}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        onChange={handlePassword}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={onLogin}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </Card>
    )
}

export default Login