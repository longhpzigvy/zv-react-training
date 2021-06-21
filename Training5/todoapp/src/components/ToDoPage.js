import React from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoSearch from "./ToDoSearch";
import { TodoStyle } from "../styles";

const ToDoPage = () => {
    return (
        <div style={TodoStyle.todoPageContainer}>
            <div style={TodoStyle.todoListWrapper}>
                <ToDoForm />
                <ToDoSearch />
                <ToDoList />
            </div>
        </div>
    );
};
export default ToDoPage;
