import React, { useState, useEffect } from "react";

const Modal = ({ isShown, hide }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        return setText((t) => t.concat("Space"));
      }

      return setText((t) => t.concat(e.key));
    };

    if (isShown) {
      document.addEventListener("keydown", handleKeyDown, false);
    }

    return () => document.removeEventListener("keydown", handleKeyDown, false);
  }, [isShown]);
  
  return (
    <div style={isShown ? null : { display: "none" }}>
      <textarea />
      <p>{text}</p>
      <button onClick={hide}>close</button>
    </div>
  );
};

export default Modal;
