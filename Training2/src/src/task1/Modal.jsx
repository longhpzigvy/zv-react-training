import React from "react";
import "./modal.css";

const Modal = ({ isShowing, hide, children }) => {
  return (
    <div className="modal" style={isShowing ? null : { display: "none" }}>
      <div className="modal-header">
        <button type="button" onClick={hide}>
          x
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </div>
  );
};

export default Modal;
