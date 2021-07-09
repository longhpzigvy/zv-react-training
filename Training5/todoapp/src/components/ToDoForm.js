import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../redux/action/TodoAction";
import { TodoStyle } from "../styles/";

const ToDoForm = () => {
    const dispatch = useDispatch();
    const [todoContent, setTodoContent] = useState("");
    const onContentInputChanged = (e) => {
        setTodoContent(e.target.value);
    };

    const onAddButtonPressed = () => {
        if (todoContent.trim().length > 0) {
            setTodoContent("");
            dispatch(addTodoItem(todoContent));
        }
    };

    return (
        <div style={TodoStyle.todoFormWrapper}>
            <div style={TodoStyle.todoInputWraper}>
                <input
                    type="text"
                    style={TodoStyle.todoInput}
                    size="large"
                    placeholder="What need to be done...."
                    value={todoContent}
                    onChange={onContentInputChanged}
                />
            </div>
            <button
                style={TodoStyle.addTodoButton}
                onClick={onAddButtonPressed}
            >
                Add
            </button>
        </div>
    );
};

export default ToDoForm;
