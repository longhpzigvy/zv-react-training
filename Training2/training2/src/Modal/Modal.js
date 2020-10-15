import React from 'react';
import '../Style/Modal.css';

const Modal = props => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Modal;