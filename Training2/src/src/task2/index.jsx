import React, { useState } from "react";
import Modal from "../task1/Modal";
import CloseButton from "./CloseButton";
import './index.css'

const CloseModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="close-modal">
      <h1>Task 2</h1>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <Modal isShowing={isShowing} hide={handleClick}>
        Hello
        <CloseButton close={handleClick} />
      </Modal>
    </div>
  );
};

export default CloseModal;
