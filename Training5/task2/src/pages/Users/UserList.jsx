import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { notification } from 'antd'
import { useParams, useHistory } from "react-router-dom";
import DetailPage from "../../layout/UserDetail";

const UserListPage = () => {
    const { id } = useParams()
    const history = useHistory()
    const [user, setUser] = useState({})
    const users = useSelector(state => state.users.users)
    const userIds = useSelector(state => state.users.users.map(user => user.id))
    useEffect(() => {
        if (!userIds.includes(id)) {
            notification.open({
                message: 'Not Found',
                description: 'User is not found',
            });
            history.push('/app/users')

        }
        if (id) {
            const newUser = users.find(nUser => nUser.id === id)
            setUser({ ...newUser })
        }
    }, [id, users])


    const { fullName, email, password, role } = user

    return <DetailPage fullName={fullName} email={email} password={password} id={id} role={role} />
}

export default UserListPage