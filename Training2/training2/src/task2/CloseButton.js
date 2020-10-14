import React from 'react';

const CloseButton = props => {
    
    return(
        <button onClick={() => {props.toggleComp()}}> 
            Close Modal
        </button>
    );
}

export default CloseButton;