import React, { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import './Style/Modal.css';

const App = _ => {
    const [display, setDisplay] = useState(false);
    const toggleDisplay = () => {
        setDisplay(display => !display);
    }
    const [value, setValue] = useState('');
    const getValue = value => setValue(value);
    return (
        <div className={!display ? 'container' : ''}>
            <h1>{value}</h1>
            {!display && <button onClick={toggleDisplay}>Show Modal</button>}
            {display && <Modal display={display} toggleDisplay={toggleDisplay} getValue={getValue}>
                <h1>Modal</h1>
            </Modal>}
        </div>
    );
}

export default App;
