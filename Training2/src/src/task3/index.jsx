import React, { useState, useEffect } from "react";

const CountNumber = () => {
  const [isStart, setIsStart] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number === 0) {
      setNumber(0);
      setIsStart(false);
    }
  }, [number]);

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        setNumber((preNumber) => preNumber - 1);
      }, 1000);
    }
    return () => {
        clearInterval(timer);
    };
  }, [isStart]);

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value, 10));
  };

  const handleStart = () => {
    if (!number) {
      setNumber(0);
      setIsStart(false);
      alert("Please input a number");
    }
    if (!(number - 1)) {
      alert("Invalid number. Must be a number");
      setIsStart(false);
    }
    if (number < 0) {
      setIsStart(false);

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
