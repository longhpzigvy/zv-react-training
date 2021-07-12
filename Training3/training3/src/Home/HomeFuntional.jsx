import React, { useCallback, useEffect, useState } from "react";
import Modal from "../Modal";
import { keyBoard } from "../constanst/keyBoard.js";
HomeFuntional.propTypes = {};

function HomeFuntional() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState([]);

  const [test, setTest] = useState(true);
  if (test) {
    console.log("vietnam");
  }

  //you must use useCallback for thiss function, because it
  // should be a function use for add/remove event listener, not create new whenever the HomeFunctional render
  const handleInputKeyLogger = useCallback((e) => {
    console.log("test");
    setInput((input) => [
      ...input,
      keyBoard[e.keyCode] ? keyBoard[e.keyCode] : e.key,
    ]);
  }, []);

  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", handleInputKeyLogger);
      return () => {
        //componentWillUnmount
        document.removeEventListener("keydown", handleInputKeyLogger);
      };
    }
    //please move the return () => {}
    //inside the if (show), we don't want to return a function if show = false and check condition (duplicate)
  }, [show]);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <div>
      <button id="btn-id" type="button" onClick={showModal}>
        Open Modal
      </button>
      <p>Text received from Modal</p>
      <span>
        {input.length > 0 &&
          input.map((log, index) => <p key={index}>{log}</p>)}
      </span>

      <Modal show={show} handleClose={showModal}>
        <p>This is Modal</p>
      </Modal>
    </div>
  );
}

export default HomeFuntional;
