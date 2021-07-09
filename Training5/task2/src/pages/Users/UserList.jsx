import React, { useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { notification } from "antd";
import { useParams, useHistory, Redirect } from "react-router-dom";
import DetailPage from "../../layout/UserDetail";
function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}
const UserListPage = () => {
    const { id } = useParams();
    const isFetchingListUser = useSelector((state) => state);
    const users = useSelector((state) => state.users.users);
    const user = useMemo(
        () => users.find((nUser) => nUser.id === id),
        [id, users]
    );
    const previousFetchingListUser = usePrevious(isFetchingListUser);
    if (previousFetchingListUser === true && !isFetchingListUser && !user) {
        notification.open({
            message: "Not Found",
            description: "User is not found",
        });
        return <Redirect to="app/users" />;
    }
    return (
        <div>
            {
                user ? <DetailPage user={user} /> : <div>Loading....</div>
            }
        </div>

    );
};
export default UserListPage;