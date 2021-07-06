import React, { useState } from 'react'
import { Button, Checkbox, Input } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { selectedTodoById, todosToggled, updateTodo,deleteTodo } from '../../../redux/reducers/todo'

const ListItemsPage = ({ id }) => {
    const todo = useSelector(state => selectedTodoById(state, id))
    const dispatch = useDispatch()
    const { name, completed } = todo
    const [input, setInput] = useState(name)
    const [disable, setDisabled] = useState(true)

    const handleEdit = () => {
        setDisabled(false)
        setInput('')
    }

    const onChange = () => {
        dispatch(todosToggled(id))
    }

    const handleUpdate = (e) => {
        setInput(e.target.value)
    }
    const onKeyDown = async (e) => {
        const trimmedText = input.trim()
        if (e.key === 'Enter' && trimmedText) {
            await dispatch(updateTodo({ id: id, text: trimmedText }))
            setDisabled(true)
        }
    }

    const handleDel = async () => {
        await dispatch(deleteTodo(id))
    }
    return (
        <div className="list-items" style={{ display: 'flex' }}>
            <Checkbox
                checked={completed}
                onChange={onChange}
            />
            <Input
                disabled={disable}
                value={input}
                bordered={false}
                onChange={handleUpdate}
                onKeyDown={onKeyDown}
            />
            <Button type='text' style={{ color: 'green' }} onClick={handleEdit}><EditOutlined /></Button>
            <Button type='text' style={{ color: 'red' }} onClick={handleDel}><DeleteOutlined /></Button>
        </div>
    )
}

export default ListItemsPage