import React from 'react';
import '../Style/Modal.css';
import CloseButton from './CloseButton';
import '../Style/Modal.css';

const Modal = props => {
    if(props.display){
        return (
            <div className='overlay' onClick={props.toggleDisplay}>
                <div className='modal' onClick={e => e.stopPropagation()}>
                    {props.children}
                    <CloseButton toggleDisplay={props.toggleDisplay}/>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Modal;