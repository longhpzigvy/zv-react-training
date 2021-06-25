import React from 'react';
import { useSelector } from 'react-redux';
import BasicLayout from '../../layout'

const MyInfoPage =()=>{
    const user = useSelector(state => state.users.user)
    const {fullName,email,password,id, role}=user

    return(
        <BasicLayout>
            <p>Full Name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Id: {id}</p>
            <p>Role: {role}</p>
        </BasicLayout>
    )
}

export default MyInfoPage