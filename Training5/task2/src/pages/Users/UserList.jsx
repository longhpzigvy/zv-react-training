import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserPage from ".";

const UserListPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        if (id) {
            const newUser = users.find(nUser => nUser.id === id)
            setUser({ ...newUser })
        }
    }, [id,users])
    const { fullName, email, password, role } = user

    return (
        <UserPage>
            <p>Full Name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Role: {role}</p>

        </UserPage>
    )
}

export default UserListPage