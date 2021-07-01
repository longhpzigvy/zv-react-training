import React from 'react';
import { Layout, Avatar, Image, Dropdown, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout

const HeaderPage = () => {
    const menu = (
        <Menu>
            <Menu.Item key='0'>
                <a href='/app/my-info'>Profile</a>
            </Menu.Item>
            <Menu.Item>
                <Button>Log Out</Button>
            </Menu.Item>
        </Menu>
    )

    return (
        <Header className="header" style={{ display: 'flex' }}>
            <div className="logo" style={{ color: 'white', width: '96%' }}>
                Zigvy logo
            </div>
            <Dropdown overlay={menu} trigger={['click']} overlayStyle={{ float: 'right' }}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                </a>
            </Dropdown>,
        </Header>
    )
}
export default HeaderPage