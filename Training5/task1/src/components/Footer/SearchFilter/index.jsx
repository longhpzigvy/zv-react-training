import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { searchFilterChanged } from '../../../redux/reducers/filter'

const { Search } = Input

const SearchFilter = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    const onChange = e => {
        setInput(e.target.value)
    }

    useEffect(() => {
        if (input) {
            return dispatch(searchFilterChanged(input))
        }
        return dispatch(searchFilterChanged(''))
    }, [input])

    return (
        <Search value={input} onChange={onChange} />
    )
}

export default SearchFilter