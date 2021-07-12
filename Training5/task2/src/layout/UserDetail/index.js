import React from 'react'

const DetailPage = ({ user }) => {

    return (
        <div className='detail-page'>
            <p> Full name: {user.fullName}</p>
            <p> Email: {user.email}</p>
            <p> Password: {user.password}</p>
            <p> Id: {user.id}</p>
            <p> Role: {user.role}</p>
        </div>
    )
}

export default DetailPage