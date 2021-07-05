import { useState, useEffect } from "react";
var _ = require("lodash");
const axios = require("axios");

export default function GetJokes() {
  const [state, setState] = useState({
    loading: false,
    jokes: [],
  });

  const handleClick = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    await axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        const joke = res.data;
        setState((prevState) => ({
          loading: false,
          jokes: [...prevState.jokes, joke],
        }));
      })
      .catch((err) => console.log(err));
  };

  const handleClickThrottled = _.throttle(handleClick, 3000);

  useEffect(() => {
    handleClickThrottled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {state.loading ? (
        <p>Loading..</p>
      ) : (
        state.jokes && (
          <ul>
            {state.jokes.map((joke) => (
              <li key={joke.id}>
                <p>Type: {joke.type}</p>
                <p>Setup: {joke.setup}</p>
                <p>Punchline: {joke.punchline}</p>
              </li>
            ))}
          </ul>
        )
      )}
      <button id="getMoreJoke" onClick={handleClickThrottled}>
        Get more joke
      </button>
    </div>
  );
}
