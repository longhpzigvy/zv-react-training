import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { statusFiltersChanged } from '../filters/filtersSlice'
import { todosSearched } from '../todos/todosSlice'
import StatusFilter from './StatusFilter'


const Footer = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const onChange = e => {
        setText(e.target.value)
    }

    const onKeyDown = e => {
        const trimmedText = e.target.value.trim()
        if (e.key === 'Enter' && trimmedText) {
            dispatch(todosSearched(trimmedText))
        }

    }

    const { status } = useSelector(state => state.filters)

    const onStatusChange = status => dispatch(statusFiltersChanged(status))

    return (
        <div className="footer">
            <div className="search">
                <h5>Search To-do name</h5>
                <input
                    value={text}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
            <h5>Filter by Status</h5>
            <StatusFilter value={status} onChange={onStatusChange} />
        </div>
    )
}

export default Footer