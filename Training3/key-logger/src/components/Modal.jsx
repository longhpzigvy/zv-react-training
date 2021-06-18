import React, { useState, useEffect } from "react";

const Modal = ({ isShown, hide, text }) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    setKeys(text);
  }, [text]);
  return (
    <div className="modal" style={isShown ? null : { display: "none" }}>
      <h1>Key Logger</h1>
      <p>{keys}</p>
      <button onClick={hide}>Close</button>
    </div>
  );
};

export default Modal;
