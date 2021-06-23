import React from "react";
import "./Info.css";

export default function Info(props) {
    const { profile } = props;
    return (
        <div className="insta-main">
            <div className="insta-wrapper">
                <div className="insta-details">
                    <div className="insta-name">
                        <span>
                            FullName: {profile ? profile.fullName : "Admin"}
                        </span>
                        <span>Email: {profile ? profile.email : "Admin"}</span>
                        <span>
                            Password: {profile ? profile.password : "Admin"}
                        </span>
                        <span>Id: {profile ? profile.id : "Admin"}</span>
                        <span>Role: {profile ? profile.role : "Admin"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
