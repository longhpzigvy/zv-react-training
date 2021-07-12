import React from 'react'
import { Card } from 'antd'
import { useSelector } from 'react-redux'
import HeaderPage from './Header'
import TaskPage from './Task'

const selectedTasks = state => state.tasks.map(task => task.id)
const ContentPage = () => {
    const taskList = useSelector(selectedTasks)
    return (
        <Card className='content-page' style={{ margin: '10px 20px', width: '370px' }} bodyStyle={{ padding: '10px' }}>
            <HeaderPage />
            {taskList.map(task => (<TaskPage id={task} />))}
        </Card>

    )
}

export default ContentPage