import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button, Input } from 'antd'
import { ERROR, DRAFT, READY, SUBMITTING } from '../../../contant/taskStatus'
import { updateTask, changeTaskStatus } from '../../../redux/action Creators/task';
import './index.css';

const selectedTasks = (state, taskId) => state.tasks.find(task => task.id === taskId)


const TaskPage = ({ id }) => {
    const taskId = useSelector(state => selectedTasks(state, id))
    const network = useSelector(state => state.network.status)
    const readyTasks = useSelector(state => state.tasks.filter(task => task.status === READY))
    const dispatch = useDispatch()


    const { taskName, status } = taskId
    const [value, setValue] = useState(taskName)

    if (network) {
        for (let i = 0; i < readyTasks.length; i++) {
            dispatch(changeTaskStatus({ id: readyTasks[i].id, status: SUBMITTING }))

        }
    }

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
            dispatch(changeTaskStatus({ id: id, status: READY }))
        }

        if (status === ERROR && network) {
            dispatch(changeTaskStatus({ id: id, status: SUBMITTING }))
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