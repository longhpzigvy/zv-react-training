import React from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { TodoStyle } from "../styles";

const ToDoPage = () => {
    return (
        <div style={TodoStyle.todoPageContainer}>
            <div style={TodoStyle.todoListWrapper}>
                <ToDoForm />
                <ToDoList />
            </div>
        </div>
    );
};
export default ToDoPage;
