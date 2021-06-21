import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Open Modal</button>
      <Modal isShown={isShown} hide={handleClose}  />
    </div>
  );
};
export default App;
