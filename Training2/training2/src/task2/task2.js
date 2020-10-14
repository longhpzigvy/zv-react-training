import React, {useState} from 'react';
import Modal from './Modal';
import CloseButton from './CloseButton';

const Task2 = props => {
    const [display, setDisplay] = useState(true);
    const toggleComp = () => {
        setDisplay(false);
    }
    return(
        <div>
            {display ? <Modal><h1>Hello</h1><CloseButton toggleComp={toggleComp}/></Modal> : ''}
        </div>
    );  
}

export default Task2;