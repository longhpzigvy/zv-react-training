import React, { useState } from "react";
import Modal from "./Component/Modal";
import CloseButton from "./Component/CloseButton";
import "./App.css";
const App = (props) => {
    const [isShow, setIsShow] = useState(false);
    const toggleModal = () => {
        setIsShow(!isShow);
    };

    return (
        <div className="App">
            {!isShow && (
                <button
                    class="toggle-button"
                    id="centered-toggle-button"
                    onClick={toggleModal}
                >
                    show Modal
                </button>
            )}

            {isShow && (
                <Modal>
                    Hello
                    <CloseButton onClick={toggleModal} />
                </Modal>
            )}
        </div>
    );
};

export default App;
