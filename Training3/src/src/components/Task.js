import React, { useEffect, useState } from "react";
import { mapKeyboard } from "../constants/mapKeyboard";
import Modal from "./Modal";

function Task() {
  const [isShowing, setIsShowing] = useState(false);
  const [logger, setLogger] = useState([]);
  const handleClick = () => {
    setIsShowing((isShowing) => !isShowing);
  };
  const handleKeyDown = (e) => {
    setLogger((logger) => [
      ...logger,
      mapKeyboard[e.keyCode] ? mapKeyboard[e.keyCode] : e.key,
    ]);
  };

  useEffect(() => {
    if (isShowing) document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (isShowing) document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShowing]);

  return (
    <div>
      <Modal isShowing={isShowing} hide={handleClick}>
        <textarea
          style={{ margin: "10px", width: "400px", height: "300px" }}
        ></textarea>
      </Modal>
      <button onClick={handleClick}>Open Modal</button>
      {logger.length > 0 &&
        logger.map((log, index) => <p key={index}>{log}</p>)}
    </div>
  );
}

export default Task;
