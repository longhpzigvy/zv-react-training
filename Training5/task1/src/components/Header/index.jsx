import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux'
import { saveNewTodos } from '../../redux/reducers/todo';

const HeaderPage = () => {
    const [input, setInput] = useState('')
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
        <Input
            value={input}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default HeaderPage