import React, { useEffect, useState } from 'react';
import '../Style/Modal.css';
import CloseButton from './CloseButton';
import '../Style/Modal.css';


const Modal = props => {
    let value = '';
    useEffect(() => {
        props.getValue('');
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
            props.getValue(value);
        }
    }, []);
    const handleKeydown = (e) => {
        value = value.concat(e.key);
    }

    if(props.display){
        return (
            <div className='overlay' onClick={props.toggleDisplay} onKeyDown={handleKeydown}>
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