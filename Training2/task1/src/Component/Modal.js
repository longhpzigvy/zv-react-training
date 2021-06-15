import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
    return props.show ? (
        <div className={classes.modal} id="modal">
            <h2>Modal Window</h2>
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
    ) : null;
};
export default Modal;
