import { useEffect, useRef, useState } from "react";

const KeyboardLogger = ({ isShow, handleClose }) => {
  const [state, setState] = useState({
    keyboardLogger: {},
  });
  const myInputRef = useRef("");

  const onInput = (e) => {
    setState((prevState) => {
      let keyboardLogger = Object.assign({}, prevState.keyboardLogger);
      if (keyboardLogger.hasOwnProperty(e.key)) keyboardLogger[e.key] += 1;
      else keyboardLogger[e.key] = 1;
      return { keyboardLogger };
    });
  };

  useEffect(() => {
    let ref = myInputRef.current;
    isShow && ref.addEventListener("keydown", onInput, false);
    return () => ref.removeEventListener("keydown", onInput, false);
  }, [isShow]);

  return (
    <div className={`modal ${isShow ? "display-block" : "display-none"}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <textarea
          type="text"
          id="myInput"
          ref={myInputRef}
          rows="10"
          cols="100"
        />
        <h3>{JSON.stringify(state.keyboardLogger)}</h3>
      </div>
    </div>
  );
};

export default KeyboardLogger;
