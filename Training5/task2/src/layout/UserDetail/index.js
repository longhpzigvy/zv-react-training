import React from 'react'

const DetailPage = ({ id, fullName, email, password, role }) => {

    return (
        <div className='detail-page'>
            <p> Full name: {fullName}</p>
            <p> Email: {email}</p>
            <p> Password: {password}</p>
            <p> Id: {id}</p>
            <p> Role: {role}</p>
        </div>
    )
}

export default DetailPage