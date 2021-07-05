import axios from "axios";
import { throttle } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

function Task1() {
  const [jokes, setJokes] = useState([]);

  const getRandomJoke = async () => {
    try {
      const { data } = await axios.get(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      setJokes((jokes) => [...jokes, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = useCallback(throttle(getRandomJoke, 1000), []);

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Get More Joke</button>
      {jokes.map((item) => (
        <div key={item.id} style={style}>
          <h5>setup: {item.setup}</h5>
          <h6>punchline: {item.punchline}</h6>
        </div>
      ))}
    </div>
  );
}

const style = { margin: 10, border: " 1px solid grey" };

export default Task1;
