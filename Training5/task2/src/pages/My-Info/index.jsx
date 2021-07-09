import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    LoadingOutlined,
} from '@ant-design/icons';
import DetailPage from '../../layout/UserDetail';
import { getUser } from '../../redux/actionCreators/user';


const MyInfoPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    useEffect(() => {
        dispatch(getUser());
    }, []);
    const isFetching = useSelector((state) => state.user.isFetching);
    return (
        <div>
            <h3>My Info page</h3>
            {isFetching && (
                <div>
                    Data Loading...
                    <LoadingOutlined />
                </div>
            )}
            {user && !isFetching && <DetailPage user={user} />}
        </div>
    );
};
export default MyInfoPage;