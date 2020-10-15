import React, { useState } from 'react';
import './Style/Modal.css';
import Modal from './Modal/Modal';
import CloseButton from './Modal/CloseButton';

const App = _ => {
    const [display, setDisplay] = useState(false);
    const toggleDisplay = () => {
        setDisplay(display => !display);
    }
    return (
        <div className={!display ? 'container' : ''}>
            {!display && <button onClick={toggleDisplay}>Show Modal</button>}
            {display && <Modal>
                <div className='overlay' onClick={toggleDisplay}>
                    <div className='modal' onClick={e => e.stopPropagation()}>
                        <h1>Modal</h1>
                        <CloseButton toggleDisplay={toggleDisplay}/>
                    </div>
                </div>
            </Modal>}
        </div>
    );
}

export default App;
