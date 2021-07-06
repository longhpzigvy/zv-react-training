import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    LoadingOutlined,
  } from '@ant-design/icons';
import DetailPage from '../../layout/UserDetail';
import { getUser } from '../../redux/actionCreators/users';


const MyInfoPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getUser())
    }, [])
    const isFetching = useSelector(state => state.users.isFetching)
    if (isFetching) {
        return <h4>Data Loading...<LoadingOutlined /></h4>
    }


    if (user) {
        const { fullName, email, password, id, role } = user

        return (
            <DetailPage fullName={fullName} email={email} password={password} id={id} role={role} />
        )

    }
    return <h3>My Info page</h3>
}

export default MyInfoPage