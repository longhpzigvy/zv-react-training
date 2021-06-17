import React, { useState, useEffect } from "react";

const CountNumber = () => {
  const [isStart, setIsStart] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let timer;
    if (!isStart) {
      clearTimeout(timer);
      return number;
    }
    if (number > 0) {
      timer = setTimeout(() => setNumber(number - 1), 1000);
    }
    if (number === 0) {
      setIsStart(false);
    }
  }, [number, isStart]);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleStart = () => {
    if (!number) {
      alert("Please in put the number");
    }
    if (!(number - 1)) {
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
  
  return (
    <div className="count-down">
      <h1>Task 3</h1>
      <input onChange={handleChange} placeholder="Please input the number" />
      <p>The number count down: {number}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
export default CountNumber;
