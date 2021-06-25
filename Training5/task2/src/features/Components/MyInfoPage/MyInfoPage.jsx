import React, { useEffect } from 'react'
import DashBoard from '../Dashboard/Dashboard'
import { useSelector } from 'react-redux'
import axios from 'axios'

const MyInfoPage = () => {

    const user = useSelector(state => state.users.entities.user)
    const { fullName, email, password, id, role } = user
    return (
        <DashBoard>
            <p>Full name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Id: {id}</p>
            <p>role:{role}</p>
        </DashBoard>
    )
}

export default MyInfoPage