import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux'
import ListItemsPage from './ListItems';
import { selectedFilterTodoIds } from '../../redux/reducers/todo'

const ListPage = () => {
    const todos = useSelector(selectedFilterTodoIds)
    const renderTodo = todos.map(todo => {
        return <ListItemsPage key={todo} id={todo} />
    })

    return (
        <div>
            <List >{renderTodo}</List>
        </div>
    )
}

export default ListPage;