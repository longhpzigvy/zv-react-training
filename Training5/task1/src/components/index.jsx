import React from 'react'
import { Card } from 'antd'
import HeaderPage from './Header'
import FooterPage from './Footer'
import ListPage from './List'

const BasicLayout = () => {
    return (
        <Card title='To-do List' style={{ width: 300 }}>
            <HeaderPage />
            <ListPage />
            <FooterPage />
        </Card>
    )
}

export default BasicLayout