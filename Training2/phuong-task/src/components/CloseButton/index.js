import React from "react"
import "./close-button.css"

const CloseButton = (props) => {
    const {toggleModal} = props;

    return (
        <button onClick={toggleModal} className="button-close">Close</button>
    )
}

export default CloseButton