import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { saveNewTodos } from '../../redux/reducers/todo';
import {
    LoadingOutlined,
} from '@ant-design/icons';

const HeaderPage = () => {
    const [input, setInput] = useState('')
    const isLoading = useSelector(state => state.todos.isLoading)
    const dispatch = useDispatch()

    const onChange = e => {
        setInput(e.target.value)
    }
    const onKeyDown = async e => {
        const trimmedText = input.trim()

        if (e.key === 'Enter' && trimmedText) {
            await dispatch(saveNewTodos(trimmedText))
            setInput('')
        }

    }
    return (
        <div style={{ display: 'flex' }}>
            <Input
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            {isLoading ? (<LoadingOutlined />) : null}
        </div>

    )
}

export default HeaderPage