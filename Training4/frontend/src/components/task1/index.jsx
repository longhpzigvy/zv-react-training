import React, { useState, useEffect } from "react";
import axios from "axios";
import { throttle } from "lodash";

const Joke = () => {
  const [id, setId] = useState(1);
  const [joke, setJoke] = useState({});
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/jokes/${id}`)
      .then((res) => {
        if (!res.data) {
          return setMessage(  "Please try again" );
        }
        setJoke(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleClick = () => {
    setId(Math.floor(Math.random() * 386) + 1);
  };

  const debounceHandleClick = throttle(handleClick, 1000);
  return (
    <div className="jokes">
      <h1>Some Jokes</h1>
      <p>{message ? message : joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={debounceHandleClick}>Get more Jokes</button>
    </div>
  );
};

export default Joke;
