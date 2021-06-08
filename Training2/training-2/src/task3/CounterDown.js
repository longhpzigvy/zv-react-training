import { useState, useRef } from "react";
import Counter from "./Counter";

const CounterDown = () => {
  const inputRef = useRef(null);

  const [state, setState] = useState({
    errMsg: "",
    inputVal: "",
    showCounter: false,
  });

  const focusNumberInput = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setState({
      ...state,
      inputVal: e.target.value,
    });
  };

  const handleValidation = () => {
    let msg = "";
    let isValid = true;
    if (state.inputVal === "") {
      msg = "Please input a number";
      isValid = false;
    } else if (isNaN(state.inputVal)) {
      msg = "Invalid input. Must be a number";
      isValid = false;
    } else if (parseInt(state.inputVal, 10) <= 0) {
      msg = "Number must be greater than 0";
      isValid = false;
    }
    return { isValid, msg };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation().isValid) {
      setState({ ...state, showCounter: true });
    } else {
      setState({ ...state, errMsg: handleValidation().msg });
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={inputRef}
          type="text"
          value={state.inputVal}
          onClick={focusNumberInput}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="submit-button">
          Start
        </button>
      </form>
      {state.errMsg && <p className="err-msg">{state.errMsg}</p>}
      <Counter
        counter={parseInt(state.inputVal, 10)}
        isShow={state.showCounter}
      />
    </>
  );
};

export default CounterDown;
