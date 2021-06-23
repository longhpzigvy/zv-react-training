import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewTodos } from '../todos/todosSlice'

const Header = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const onChange = e => {
        setInput(e.target.value)
    }

    const onKeyDown = async e => {
        const trimmedText = input.trim()
        if (e.key === 'Enter' && trimmedText) {
           await dispatch(saveNewTodos(trimmedText))
        }
        setInput('')
    }

    return (
        <div className='header'>
            <h2>To-do List</h2>
            <input onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    )
}

export default Header