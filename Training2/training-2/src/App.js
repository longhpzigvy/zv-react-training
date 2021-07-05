import { useState } from "react";
import "./App.css";
import FirstModal from "./task1/FirstModal";
import CloseButton from "./task2/CloseButton";
import SecondModal from "./task2/SecondModal";
import CounterDown from "./task3/CounterDown";

const App = () => {
  const [state, setState] = useState({
    showModal1: false,
    showModal2: false,
  });

  const showModal = (idx) => {
    setState({
      ["showModal" + idx]: true,
    });
  };

  const closeModal = (idx) => {
    setState({
      ["showModal" + idx]: false,
    });
  };

  return (
    <div className="container">
      <FirstModal isShow={state.showModal1} handleClose={() => closeModal(1)} />
      <button className="button" onClick={() => showModal(1)}>
        Open 1st modal
      </button>
      <br />
      <br />
      <SecondModal isShow={state.showModal2}>
        <CloseButton handleClose={() => closeModal(2)} />
        <p>Second Modal</p>
      </SecondModal>
      <button className="button" onClick={() => showModal(2)}>
        Open 2nd modal
      </button>
      <CounterDown />
    </div>
  );
};

export default App;
