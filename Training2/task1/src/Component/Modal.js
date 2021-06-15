import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div
            className={`${classes.modal} ${
                props.show ? classes.show : classes.hidden
            }`}
            id="modal"
        >
            <h2>Modal</h2>
            <div className={classes.content}>{props.children}</div>
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
