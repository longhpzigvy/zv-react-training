import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/action Creators/task'

const InputPage = () => {
    const [taskName, setTaskName] = useState('')
    const dispath = useDispatch()

    const onChange = e => {
        setTaskName(e.target.value)
    }

    const onClick = () => {
        if (taskName) {
            dispath(addTask(taskName))
            setTaskName('')
        }
    }

    return (
        <div className='input-page' style={{ margin: '50px 0 0 20px' }}>
            <h1>List Tasks</h1>
            <Input
                onChange={onChange}
                value={taskName}
                placeholder='Text Input'
                style={{ width: '296px', textAlign: 'center' }} />
            <Button onClick={onClick}>+ Task</Button>
        </div>
    )
}

export default InputPage