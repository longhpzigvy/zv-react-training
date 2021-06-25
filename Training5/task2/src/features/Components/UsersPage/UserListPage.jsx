import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import UserPage from './UserPage';

const userData = state => state.users.entities.users

const UserListPage = () => {
    const user = useSelector(userData);
   
    const [profile, setProfile] = useState({})

    let { id: pathId } = useParams();

    useEffect(() => {
        const result = user.find(x => x.id === pathId)
        console.log(result);
        setProfile({ ...result })
    }, [pathId])

    const { fullName, email, password, id, role } = profile
    return (
        <UserPage>
            <p>Full name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Id: {id}</p>
            <p>role:{role}</p>
        </UserPage>
    )
}

export default UserListPage