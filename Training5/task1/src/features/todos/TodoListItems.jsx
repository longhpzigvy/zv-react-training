import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox, Button } from 'antd'
import { selectedTodoByIds, todosDeleted, todosToggled,deleteTodo } from './todosSlice'


const TodoListItems = ({ id }) => {

    const todo = useSelector((state) => selectedTodoByIds(state, id))
    const { name, completed } = todo

    const dispatch = useDispatch()

    const onChange = () => {
        dispatch(todosToggled(todo.id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }


    return (
        <li>
            <Checkbox
                checked={completed}
                onChange={onChange}
            >{name}</Checkbox>

            <Button type='text' onClick={handleDelete}>x</Button>
        </li>
    )
}

export default TodoListItems