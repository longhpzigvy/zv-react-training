import React from "react";
import { useSelector } from "react-redux";
import Info from "../../Components/Info/Info";

export default function Profile() {
    const profile = useSelector((state) => {
        return state.myProfile;
    });
    return (
        <div className="container">
            <Info profile={profile} />
        </div>
    );
}
