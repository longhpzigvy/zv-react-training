import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd'
import TodoListItems from './TodoListItems'
import { selectedFilterTodoId } from './todosSlice'

const TodoList = () => {
    const todoIds = useSelector(selectedFilterTodoId)
        const renderToDoList = todoIds.map(todo => {
        return (
            <List.Item><TodoListItems key={todo} id={todo} /></List.Item>
        )
    })

    return (
        <div className='todo-list'>
            <List>{renderToDoList}</List>
        </div>
    )
}

export default TodoList