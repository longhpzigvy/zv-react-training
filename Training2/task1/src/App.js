import React, { useState } from "react";
import Modal from "./Component/Modal";
import "./App.css";
const App = (props) => {
    const [isShow, setIsShow] = useState(false);
    const toggleModal = () => {
        setIsShow(!isShow);
    };

    return (
        <div className="App">
            <button
                class="toggle-button"
                id="centered-toggle-button"
                onClick={toggleModal}
            >
                show Modal
            </button>

            <Modal onClose={toggleModal} show={isShow}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                deserunt corrupti, ut fugit magni qui quasi nisi amet
                repellendus non fuga omnis a sed impedit explicabo accusantium
                nihil doloremque consequuntur.
            </Modal>
        </div>
    );
};

export default App;
