import React, { useState } from "react";

const Modal = ({ isShown, hide }) => {
  const [key, setKey] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      return setKey("Space");
    } 
      setKey(e.key);
    
  };

  return (
    <div className="modal" style={isShown ? null : { display: "none" }}>
      <h1>Key Logger</h1>
      <textarea onKeyDown={handleKeyDown}></textarea>
      <p>{key}</p>
      <button onClick={hide}>Close</button>
    </div>
  );
};

export default Modal;
