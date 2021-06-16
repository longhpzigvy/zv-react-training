import React, { useState } from "react";

const CountNumber = () => {
  const [isStart, setIsStart] = useState(false);
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleStart = () => {
    if (!number) {
      alert("Please in put the number");
    }
    if (!(number-1)) {
      alert("Invalid number. Must be a number");
    }
    if (number < 0) {
      alert("The number must be greater than zero");
    }
    setIsStart(true);
  };

  const handleStop = () => {
    setIsStart(false);
  };

  const count = () => {
    if (number > 0) {
      setTimeout(() => setNumber(number - 1), 1000);
      return number;
    }

    setIsStart(false);
  };
  console.log(number, isStart);

  return (
    <div className="count-down">
      <h1>Task 3</h1>
      <input onChange={handleChange} placeholder="Please input the number" />
      <p>The number count down: {isStart ? count() : number}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
export default CountNumber;
