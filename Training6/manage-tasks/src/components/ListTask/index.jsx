import React from 'react'
import { Card } from 'antd'
import NetworkPage from '../Network'
import InputPage from '../Input'
import ContentPage from '../Content'

const ListTasksPage = () => {
    return (
        <Card className='list-task-page' style={{ marginLeft: 500, width: 460 }}>
            <NetworkPage />
            <InputPage />
            <ContentPage />
        </Card>
    )
}

export default ListTasksPage