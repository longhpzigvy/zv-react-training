import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchLogin, fetchUser,fetchUsers } from '../../../redux/action';
import { useSelector } from 'react-redux'

const data = state => state.users

const LoginPage = () => {
    const [user, setUser] = useState({ email: '', password: '' })

    const userData = useSelector(data)
    const userToken = userData.token


    const dispatch = useDispatch()
    let history = useHistory();
    let location = useLocation()
    const { from } = location.state || { from: { pathname: "/app" } }

    useEffect(() => {
        if (userToken) {
            history.replace(from)
            dispatch(fetchUsers(userToken))

            dispatch(fetchUser(userToken))
        }
    }, [userToken])

    const handleEmail = e => {
        setUser({ ...user, email: e.target.value })
    }

    const handlePassword = e => {
        setUser({ ...user, password: e.target.value })
    }

    const login = () => {
        dispatch(fetchLogin(user))
    };



    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 8 },
    };

    return (
        <Form
            {...layout}
            name="basic"
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

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={login}>
                    Submit
                </Button>
            </Form.Item>
        </Form>)
}


export default LoginPage