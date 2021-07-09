import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Info from "../Info/Info";
import { getAccountInfo } from "../../redux/action/UserAction";

export default function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAccountInfo());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const profile = useSelector((state) => {
        return state.usersList[0];
    });

    return (
        <div className="container">
            <Info profile={profile} />
        </div>
    );
}
