import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div className={classes.modal} id="modal">
            <h2>Modal</h2>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
export default Modal;
