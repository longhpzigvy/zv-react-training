import React from "react";
import { useDispatch } from "react-redux";
import { removeTodoItem, toggleTodoItem } from "../redux/action/TodoAction";
import { TodoStyle } from "../styles";

const ToDoItem = (props) => {
    const dispatch = useDispatch();
    const onTodoBoxChecked = (e) => {
        dispatch(toggleTodoItem(props.todo.id, e.target.checked));
    };

    const onRemoveTodoPress = () => {
        dispatch(removeTodoItem(props.todo.id));
    };

    return (
        <div style={TodoStyle.todoItemWrapper}>
            <div style={TodoStyle.checkBoxWrapper}>
                <input
                    type="checkbox"
                    onChange={onTodoBoxChecked}
                    size="large"
                    style={{ marginBottom: 16 }}
                    checked={props.todo.completed}
                />
            </div>
            <div style={TodoStyle.contentWrapper}>
                <p
                    style={{
                        fontSize: 15,
                        marginBottom: 12,
                        textDecorationLine: props.todo.completed
                            ? "line-through"
                            : "none",
                    }}
                >
                    {props.todo.name}
                </p>
            </div>
            <div style={TodoStyle.removeButtonWrapper}>
                <button
                    style={TodoStyle.removeButton}
                    onClick={() => onRemoveTodoPress(props.todo.id)}
                >
                    DEL
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;
