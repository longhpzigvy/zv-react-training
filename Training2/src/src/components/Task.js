import { useCallback, useEffect, useState } from "react";
import Modal from "./Modal";

const Task = () => {
  const [inputVal, setInputVal] = useState("");
  const [isStopCountDown, setIsStopCountDown] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);
  const [count, setCount] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClose = useCallback(() => {
    setIsShowing(false);
  }, []);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleStart = () => {
    if (!inputVal) {
      setAlertMessage("Please input a number!!!");
      setIsShowing(true);
      return;
    }
    if (Number.isNaN(+inputVal)) {
      setAlertMessage("Invalid input. Must be a number!!!");
      setIsShowing(true);
      return;
    }
    if (inputVal <= 0) {
      setAlertMessage("Number must be greater than 0!!!");
      setIsShowing(true);
      return;
    }
    setIsShowing(false);
    setIsValidInput(true);
    setCount(+inputVal);
    setIsStopCountDown(false);
  };

  useEffect(() => {
    if (!isValidInput || isStopCountDown) {
      return;
    }
    const countDown = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => {
      clearInterval(countDown);
      setIsValidInput(false);
    };
  }, [isValidInput, isStopCountDown]);

  useEffect(() => {
    if (count <= 0) {
      setIsStopCountDown(true);
    }
  }, [count]);

  return (
    <div>
      <Modal isShowing={isShowing} hide={handleClose}>
        <h5>{alertMessage}</h5>
      </Modal>
      <h2>Your input here</h2>
      <input value={inputVal} onChange={handleInputChange} />
      <div>
        <button onClick={handleStart}>Start</button>
        {isValidInput && (
          <button onClick={() => setIsStopCountDown(true)}>Stop</button>
        )}
      </div>
      {!isStopCountDown && <p>{count}</p>}
    </div>
  );
};

export default Task;
