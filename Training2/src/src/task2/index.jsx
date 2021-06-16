import React, { useState } from "react";
import Modal from "../task1/Modal";
import CloseButton from "./CloseButton";
import "./index.css";

const CloseModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(true);
  };

  const handleClose = () => {
    setIsShowing(false);
  };
  return (
    <div className="close-modal">
      <h1>Task 2</h1>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <Modal isShowing={isShowing} hide={handleClose}>
        Hello
        <CloseButton close={handleClose} />
      </Modal>
    </div>
  );
};

export default CloseModal;
