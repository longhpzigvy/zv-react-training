import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchTodo } from "../redux/action/TodoAction";
import { TodoStyle } from "../styles/";
import _ from "lodash";

const ToDoSearch = () => {
    const dispatch = useDispatch();
    const onChangeInputHandler = (e) => {
        e.target.value.trim().length !== 0
            ? fSearch(e.target.value.trim())
            : fSearch("");
    };
    const onSearchTerm = (searchTerm) => {
        dispatch(searchTodo(searchTerm));
    };
    let fSearch;
    useEffect(() => {
        fSearch = _.debounce(onSearchTerm, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useCallback(() => {
        fSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // useCallback(() => {
    //     fSearch();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    return (
        <div style={TodoStyle.todoFormWrapper}>
            <div style={TodoStyle.todoInputWraper}>
                <input
                    type="text"
                    style={TodoStyle.todoInput}
                    placeholder="Search Item...."
                    onChange={onChangeInputHandler}
                />
            </div>
        </div>
    );
};
export default ToDoSearch;
