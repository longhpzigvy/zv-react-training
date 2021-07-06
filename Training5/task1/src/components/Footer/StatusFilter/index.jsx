import React from 'react'
import { Button, List } from 'antd'
import { StatusFilters } from '../../../redux/reducers/filter'

const StatusFilter = ({ value: status, onChange }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key]
        const handleClick = () => onChange(value)
        const className = value === status ? 'selected' : ''

        return (
            <Button type='text' className={className} onClick={handleClick}>
                {key}
            </Button>
        )
    })
    return (
        <div className='status-filters'>
            <h4>Filter By Status</h4>
            {renderedFilters}
        </div>
    )
}

export default StatusFilter