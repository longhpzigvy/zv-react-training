import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Info from "../../Components/Info/Info";

export default function Detail(props) {
    const [detail, setDetail] = useState(null);

    const usersList = useSelector((state) => {
        return state.usersList;
    });
    let { id } = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setDetail(
            usersList.find((item) => {
                return item.id === id;
            })
        );
    });
    return (
        <div className="container">
            <Info profile={detail} />
        </div>
    );
}
