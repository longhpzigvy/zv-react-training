import React from "react";
import './modal.css'

const Modal = ({ isShowing, hide, children }) =>
  isShowing ? (
    <div className="modal">
      <div className="modal-header">
        <button type="button" onClick={hide}>
          x
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </div>
  ) : null;

export default Modal;
