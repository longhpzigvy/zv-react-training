import React from "react";
export default function Info(props) {
    const { profile } = props;
    return (
        <div classNameName="card">
            <div className="card-header">
                FullName: {profile ? profile.fullName : ""}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Email: {profile ? profile.email : ""}
                </li>
                <li className="list-group-item">
                    Password: {profile ? profile.password : ""}
                </li>
                <li className="list-group-item">
                    Id: {profile ? profile.id : ""}
                </li>
                <li className="list-group-item">
                    Role: {profile ? profile.role : ""}
                </li>
            </ul>
        </div>
    );
}
