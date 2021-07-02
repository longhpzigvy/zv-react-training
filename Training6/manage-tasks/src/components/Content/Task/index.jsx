import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button, Input } from 'antd'
import { ERROR, DRAFT } from '../../../contant/taskStatus'
import { updateTask, changeTaskStatusReady, changeTaskStatusSubmitting } from '../../../redux/action Creators/task';
import './index.css';

const selectedTasks = (state, taskId) => state.tasks.find(task => task.id === taskId)


const TaskPage = ({ id }) => {
    const taskId = useSelector(state => selectedTasks(state, id))
    const network = useSelector(state => state.network.status)
    const dispatch = useDispatch()


    const { taskName, status } = taskId
    const [value, setValue] = useState(taskName)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onKeyDown = (e) => {
        const textTrim = e.target.value.trim()
        if (e.key === 'Enter' && textTrim) {
            dispatch(updateTask({ id, taskName: value }))
        }
    }

    const onClick = () => {
        if (status === DRAFT) {
            dispatch(changeTaskStatusReady(id))
        }

        if (status === ERROR && network) {
            dispatch(changeTaskStatusSubmitting(id))
        }
    }

    return (
        <Card
            className='list-item'
            style={{ margin: '5px' }}
            bodyStyle={{ padding: '5px' }}
        >
            {status !== DRAFT ?
                (<Input value={value} bordered={false} style={{ width: '65%' }} disabled />) :
                (<Input value={value} bordered={false} style={{ width: '65%' }} onChange={onChange} onKeyDown={onKeyDown} />)
            }
            {status !== DRAFT && status !== ERROR ?
                (<Button disabled>{status}</Button>) :
                (<Button onClick={onClick}>{status}</Button>)
            }

        </Card>
    )
}

export default TaskPage