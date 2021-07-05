import { useState, useEffect } from "react";

const Counter = ({ counter, isShow }) => {
  const [state, setState] = useState({
    counter: counter,
    isStopping: false,
  });

  useEffect(() => {
    setState(() => ({
      isStopping: false,
      counter: counter,
    }));
  }, [counter]);

  useEffect(() => {
    if (state.counter === 0) {
      setState((prevState) => ({
        ...prevState,
        isStopping: true,
      }));
    }
  }, [state.counter]);

  useEffect(() => {
    let intervalId;
    if (state.isStopping === false) {
      intervalId = setInterval(() => {
        setState((prevState) => ({
          ...prevState,
          counter: prevState.counter - 1,
        }));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [state.isStopping]);

  const toggleTimer = () => {
    setState((prevState) => ({
      ...prevState,
      isStopping: !prevState.isStopping,
    }));
  };

  return (
    <div style={{ display: isShow ? "block" : "none" }}>
      <div>Countdown: {state.counter}</div>
      <button onClick={toggleTimer} disabled={state.counter === 0}>
        {state.isStopping ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default Counter;
