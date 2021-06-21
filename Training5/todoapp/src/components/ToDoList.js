import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDoItem from "./ToDoItem";
import { TodoStyle } from "../styles";
import { getAllTodoItems, showCompleted } from "../redux/action/TodoAction";
import { getVisibleTodoItems } from "../redux/reducers/todoReducer";
const ToDoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodoItems());
        // eslint-disable-next-line
    }, []);
    const onCompleteChecked = (e) => {
        dispatch(showCompleted(e.target.checked));
    };
    const todoList = useSelector(getVisibleTodoItems, (state) => {
        return state.todoList;
    });
    const completedToggle = useSelector((state) => {
        return state.completedToggle;
    });
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", marginRight: 20 }}>
                    <input
                        type="checkbox"
                        onChange={onCompleteChecked}
                        checked={completedToggle}
                    />
                    <p style={{ color: "#ffff", marginLeft: 5 }}>Completed</p>
                </div>
            </div>
            <div style={TodoStyle.todoListContainer}>
                <div
                    style={{
                        display: "block",
                        alignItems: "center",
                        flexDirection: "column",
                        width: 600,
                        backgroundColor: "#fff",
                        marginTop: 10,
                        borderRadius: 3,
                        borderColor: "#e0e0e0",
                    }}
                >
                    <div style={TodoStyle.todoListTitleWrapper}>
                        <p
                            style={{
                                fontSize: 20,
                                fontWeight: 700,
                                textAlign: "center",
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        >
                            Todo List
                        </p>
                    </div>

                    {todoList.length > 0 ? (
                        todoList.map((todo) => {
                            return <ToDoItem todo={todo} key={todo.id} />;
                        })
                    ) : (
                        <p style={{ marginLeft: 10 }}>Nothing to do here...</p>
                    )}
                </div>
            </div>
        </>
    );
};
// function mapStateToProps(state) {
//     return {
//         todoList: getVisibleTodos(state),
//         completedToggle: state.Todoreducer.completedToggle
//     };
// }

export default ToDoList;
