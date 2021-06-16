import React, { useState } from "react";

const CountNumber = () => {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  let timerId;

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleStart = () => {
    if (!number) {
      return setMessage("Please input number");
    }

    if (!(number - 1)) {
      return setMessage("Invalid input. Must be a number");
    }
    if (number < 0) {
      return setMessage("Number must be greater than 0");
    }
    setMessage("");
    if (number > 0) {
      timerId = setInterval(() => {
        const newNumber = number - 1;
        setNumber(newNumber);
      }, 1000);
    }
  };

  const componentUnMount = () => {
    clearInterval(timerId);
  };
  return (
    <div className="count-number">
      <h1>Task 3</h1>
      <input onChange={handleChange} />
      <p>{message ? message : number}</p>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={componentUnMount}>
        Stop
      </button>
    </div>
  );
};

export default CountNumber;
