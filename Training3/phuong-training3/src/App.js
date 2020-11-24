import React, {useState} from "react"
import './App.css';
import ModalCustom from "./task1";

function App() {
  const [text, setText] = useState('')
  const [isOpen, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen(!isOpen)
  }

  const getValueInput = value => {
    setText(value)
  }

  return (
    <div className="App">
      <p>Text: {text}</p>
      <button onClick={toggleModal}>Show Modal</button>
      <ModalCustom isOpen={isOpen} toggleModal={toggleModal} getValueInput={getValueInput}>
        <div className="modal-body-custom">
            Phuong
        </div>
        <div className="modal-footer-custom">
            <button onClick={toggleModal} type="button">Close</button>
        </div>
      </ModalCustom>
    </div>
  );
}

export default App;
