import React, { useState } from "react";
import Modal from "./Modal";

const Greeting = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="greeting">
      <h1>Task 1</h1>
      <button type="submit" onClick={handleClick}>
        Show modal
      </button>
      <Modal isShowing={isShowing} hide={handleClick}>
        <p>Hello</p>
      </Modal>
    </div>
  );
};

export default Greeting;
