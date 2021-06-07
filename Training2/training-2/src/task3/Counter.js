import { useState, useEffect } from "react";

const Counter = ({ counter }) => {
  const [state, setState] = useState({
    counter: counter,
    pause: false,
    intervalId: "",
  });

  const tick = () => {
    state.intervalId = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        counter:
          prevState.counter > 0 ? prevState.counter - 1 : prevState.counter,
      }));
    }, 1000);
  };

  useEffect(() => {
    tick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.counter === 0) {
      return () => clearInterval(state.intervalId);
    }
  }, [state]);

  const toggleTimer = () => {
    if (state.pause === true) {
      setState((prevState) => ({
        ...prevState,
        pause: false,
      }));
      tick();
    } else {
      clearInterval(state.intervalId);
      setState((prevState) => ({
        ...prevState,
        pause: true,
      }));
      return;
    }
  };

  return (
    <div>
      <div>Countdown: {state.counter}</div>
      <button onClick={toggleTimer}>{state.pause ? "Resume" : "Pause"}</button>
    </div>
  );
};

export default Counter;
