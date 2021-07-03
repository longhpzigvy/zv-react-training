import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Info from "../Info/Info";

export default function Detail(props) {
    const [info, setInfo] = useState(null);

    const usersList = useSelector((state) => {
        return state.usersList;
    });
    let { id } = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setInfo(
            usersList.find((item) => {
                return item.id === id;
            })
        );
    });
    return (
        <div className="container">
            <Info profile={info} />
        </div>
    );
}
