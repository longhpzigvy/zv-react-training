import React from 'react'
import { StatusFilters } from '../filters/filtersSlice'
import { Button, List } from 'antd'

const StatusFilter = ({ value: status, onChange }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key]
        const handleClick = () => onChange(value)
        const className = value === status ? 'selected' : ''

        return (
            <List key={value}>
                <List.Item>
                    <Button className={className} onClick={handleClick}>
                        {key}
                    </Button>
                </List.Item>
            </List>
        )
    })

    return (
        <div className="status-filters">
            <ul>{renderedFilters}</ul>
        </div>
    )
}

export default StatusFilter