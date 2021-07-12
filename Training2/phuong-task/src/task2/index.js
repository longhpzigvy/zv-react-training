import React, {useState} from "react"
import "./task2.css"
import ModalCustom from "../task1/index"
import CloseButton from "../components/CloseButton/index"

const Task2 = () => {
    const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen)
  }
  return (
    <div className="">
      <button onClick={toggleModal} className="button-open">Click me!</button>
      <ModalCustom isOpen={isOpen} toggleModal={toggleModal}>
        <CloseButton toggleModal={toggleModal}/>
      </ModalCustom>
    </div>
  );
}

export default Task2