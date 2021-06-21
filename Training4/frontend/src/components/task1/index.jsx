import React, { useState,useCallback } from "react";
import axios from "axios";
import { throttle } from "lodash";

const Joke = () => {
  const [joke, setJoke] = useState({});
  const [message, setMessage] = useState("");
  const fetchdata=(id)=>{
    axios
    .get(`http://localhost:5000/jokes/${id}`)
    .then((res) => {
      if (!res.data) {
        return setMessage(  "Please try again" );
      }
      setJoke(res.data);
    })
    .catch((err) => console.log(err));
  }
  const handleClick = () => {
    const value=(Math.floor(Math.random() * 387) + 1);
    throttleHandleClick(value)
  };

  const throttleHandleClick = useCallback(throttle(nextValue=>fetchdata(nextValue), 1000),[]);
  
  return (
    <div className="jokes">
      <h1>Some Jokes</h1>
      <p>{message ? message : joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={handleClick}>Get more Jokes</button>
    </div>
  );
};

export default Joke;
