import React, { useState } from 'react';
import Modal from './Modal/Modal';
import './Style/Modal.css';

const App = _ => {
    const [display, setDisplay] = useState(false);
    const toggleDisplay = () => {
        setDisplay(display => !display);
    }
    return (
        <div className={!display ? 'container' : ''}>
            {!display && <button onClick={toggleDisplay}>Show Modal</button>}
            <Modal display={display} toggleDisplay={toggleDisplay}>
                <h1>Modal</h1>
            </Modal>
        </div>
    );
}

export default App;
