import React from 'react';

const CloseButton = props => {
    return(
        <button onClick={props.toggleDisplay}> 
            Close modal
        </button>
    );
}

export default CloseButton;