import React from "react";
import CloseButton from "./CloseButton";
import "../styles/modal.css";

const Modal = ({ isShowing, hide, children }) => {
  return (
    <div
      className="modal"
      style={{ visibility: isShowing ? "visible" : "hidden" }}
    >
      <div className="modal-header">
        <CloseButton handleClick={hide} />
      </div>
      <div className="modal-body">
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default Modal;
