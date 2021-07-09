import React from "react";
import classes from "./Modal.module.css";

const CloseButton = (props) => {
    return (
        <div className={classes.actions}>
            <button
                className={classes["toggle-button"]}
                onClick={props.onClick}
            >
                close
            </button>
        </div>
    );
};
export default CloseButton;
