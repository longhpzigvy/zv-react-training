import React, { useState, useEffect } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
    const [inputChar, setInputChar] = useState("");
    const onKeyDownHandler = (e) => {
        e.preventDefault();
        setInputChar((prevState) => {
            return (prevState += e.key === " " ? "Space" : e.key);
        });
    };
    return (
        <div
            className={`${classes.modal} ${
                props.show ? classes.show : classes.hidden
            }`}
            id="modal"
        >
            <h2>Modal</h2>
            <div className={classes.content}>
                <textarea
                    rows="30"
                    cols="50"
                    onKeyDown={onKeyDownHandler}
                    value={inputChar}
                ></textarea>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["toggle-button"]}
                    onClick={props.onClose}
                >
                    close
                </button>
            </div>
        </div>
    );
};
export default Modal;
