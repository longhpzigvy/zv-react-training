import React from "react";
import { useDispatch, useSelector } from "react-redux";

const NEXT_MANUALLY_STATUS = {
    draft: "ready",
    error: "ready",
};
export default function List() {
    const tasks = useSelector((state) => {
        return state.task;
    });
    const dispatch = useDispatch();
    const renderTask = () => {
        return tasks?.map((item, index) => {
            return (
                <li key={index}>
                    {item.task} -{" "}
                    <span style={{ color: "tomato" }}>{item.status}</span>
                    {item.status !== "complete" ? (
                        <span
                            className="icon"
                            onClick={() => {
                                if (!!NEXT_MANUALLY_STATUS[item.status]) {
                                    dispatch({
                                        type: "CHANGE_TASK_STATUS",
                                        payload: {
                                            task: item.task,
                                            status: NEXT_MANUALLY_STATUS[
                                                item.status
                                            ],
                                        },
                                    });
                                }
                            }}
                        >
                            <i className="fas fa-trash"></i>
                        </span>
                    ) : (
                        <span className="icon">
                            <i className="fa fa-wifi"></i>
                        </span>
                    )}
                </li>
            );
        });
    };
    return <ul className="todoList">{renderTask()}</ul>;
}
