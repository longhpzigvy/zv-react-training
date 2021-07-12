import React from "react"
import "./modal.css"

const ModalCustom = (props) => {
    // let inputRef = React.useRef('')
    let value = ''
    const { isOpen, toggleModal, children, getValueInput } = props;
    let classModal = isOpen ? "modal-custom d-block modal-wrapper" : "modal-custom d-none"

    React.useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKey)
        }
        return () =>  document.removeEventListener('keydown', handleKey)
    }, [isOpen])

    const handleKey = (event) => {
        // let value = inputRef.current.value.concat(event.key)
        value = value.concat(event.key)
        getValueInput(value)
    }

    return isOpen ? (
        <div className={classModal} onClick={toggleModal} onKeyDown={handleKey}>
            <div className="modal-container" onClick={event => event.stopPropagation()}>
                <div className="modal-header-custom">
                    <button type="button" className="modal-close-button" onClick={toggleModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {children}
                {/* <input type="text" ref={inputRef}/> */}
            </div>
        </div>
    ) : null
}

export default ModalCustom