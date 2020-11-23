import React from "react"
import "./modal.css"

const ModalCustom = (props) => {
    const { isOpen, toggleModal, children } = props;
    let classModal = isOpen ? "modal-custom d-block modal-wrapper" : "modal-custom d-none"

    return isOpen ? (
        <div className={classModal}>
            <div className="modal-container">
                <div className="modal-header-custom">
                    <button type="button" className="modal-close-button" onClick={toggleModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body-custom">
                    Hello
                </div>
                <div className="modal-footer-custom">
                    {children}
                </div>
            </div>
        </div>
    ) : null
}

export default ModalCustom