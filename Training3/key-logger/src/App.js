import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [key, setKey] = useState([]);

  const handleClick = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      return setKey([...key,"Space"]);
    }
    setKey([...key,e.key]);
  };
  console.log(key);
  return (
    <div className="app">
      <textarea onKeyDown={handleKeyDown}></textarea>

      <button onClick={handleClick}>Open Modal</button>
      <Modal isShown={isShown} hide={handleClose} text={key}/>
    </div>
  );
};
export default App;
