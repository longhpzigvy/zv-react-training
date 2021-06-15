import React, { useState } from "react";
import Modal from "./Component/Modal";
import CloseButton from "./Component/CloseButton";
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
            <Modal show={isShow}>
                Hello
                <CloseButton onClick={toggleModal} />
            </Modal>
        </div>
    );
};

export default App;
