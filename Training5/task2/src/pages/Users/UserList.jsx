import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailPage from "../../layout/UserDetail";

const UserListPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        if (id) {
            const newUser = users.find(nUser => nUser.id === id)
            setUser({ ...newUser })
        }
    }, [id, users])
    const { fullName, email, password, role } = user

    return <DetailPage fullName={fullName} email={email} password={password} id={id} role={role} />
}

export default UserListPage