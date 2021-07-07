import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Info from "../Info/Info";
import { getAccountInfo } from "../../redux/action/UserAction";

export default function Profile() {
    const dispatch = useDispatch();

    const [user] = useSelector((state) => {
        return [state.userToken];
    });

    useEffect(() => {
        dispatch(getAccountInfo(user.token));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const profile = useSelector((state) => {
        return state.userProfile;
    });

    return (
        <div className="container">
            <Info profile={profile} />
        </div>
    );
}
