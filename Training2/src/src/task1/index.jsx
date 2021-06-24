import React, { useState } from "react";
import Modal from "./Modal";

const Greeting = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(true);
  };
  const handleClose =()=>{
    setIsShowing(false);
  }

  return (
    <div className="greeting">
      <h1>Task 1</h1>
      <button type="submit" onClick={handleClick}>
        Show modal
      </button>
      <Modal isShowing={isShowing} hide={handleClose}>
        <p>Hello</p>
      </Modal>
    </div>
  );
};

export default Greeting;
