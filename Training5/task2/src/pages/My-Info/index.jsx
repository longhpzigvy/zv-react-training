import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicLayout from '../../layout'
import DetailPage from '../../layout/UserDetail';
import { getUser } from '../../redux/actionCreators/users';


const MyInfoPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [])
    const user = useSelector(state => state.users.user)

    if (user) {
        const { fullName, email, password, id, role } = user

        return (
            <DetailPage fullName={fullName} email={email} password={password} id={id} role={role} />
        )

    }
}

export default MyInfoPage