import React from 'react';
import { Layout, Avatar, Image } from 'antd'

const { Header } = Layout

const HeaderPage = () => {
    return (
        <Header className="header" style={{ display: 'flex' }}>
            <div className="logo" style={{ color: 'white', width: '50%' }}>
                Zigvy logo
            </div>
            <div style={{width: '50%'}}>
                <Avatar
                    src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    style={{ float: 'right' }} />
            </div>
        </Header>
    )
}
export default HeaderPage