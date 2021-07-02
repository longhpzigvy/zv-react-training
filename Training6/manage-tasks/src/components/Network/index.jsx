import React from 'react'
import { useSelector } from 'react-redux'

const NetworkPage = () => {
    const isOnline = useSelector(state => state.network.status)
    return (
        <div className='network-header' style={{ textAlign: 'right', width: '384px' }}>
            Network: {isOnline ? 'Online' : 'Offline'}
        </div>
    )
}

export default NetworkPage