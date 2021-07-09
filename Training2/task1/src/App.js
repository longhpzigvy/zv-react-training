import React, { useState } from "react";
import Modal from "./Component/Modal";
import classes from "./App.module.css";
const App = (props) => {
    const [isShow, setIsShow] = useState(false);
    const toggleModal = () => {
        setIsShow(!isShow);
    };

    return (
        <div className={classes.App}>
            <button
                className={`${isShow ? classes.none : ""}`}
                id="centered-toggle-button"
                onClick={toggleModal}
            >
                show Modal
            </button>
            <Modal onClose={toggleModal} show={isShow}>
                Hello World
            </Modal>
        </div>
    );
};

export default App;
