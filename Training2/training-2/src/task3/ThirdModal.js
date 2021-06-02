import { useState, useEffect } from "react";

const ThirdModal = ({ counter, isShow, children }) => {
  const displayClassName = isShow ? "display-block" : "display-none";
  const [state, setState] = useState({
    counter: counter,
    intervalId: "",
  });

  useEffect(() => {
    const timer =
      state.counter > 0 &&
      setInterval(() => {
        setState({ counter: state.counter - 1 });
      }, 1000);
    setState({ counter: state.counter, intervalId: timer });
    return () => clearInterval(timer);
  }, [state.counter]);

  const stopTimer = () => {
    state.intervalId && clearInterval(state.intervalId);
  };

  return (
    <div className={"modal " + displayClassName}>
      <div className="modal-content">
        {children}
        <div>Countdown: {state.counter}</div>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
};

export default ThirdModal;
