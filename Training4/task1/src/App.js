import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import _ from "lodash";
import QuoteItem from "./Component/QuoteItem";
const fetchRandomQuote = () => {
    return axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((res) => {
            return res;
        });
};
const App = () => {
    const clickRef = useRef();
    const [loadedQuotes, setLoadedQuotes] = useState([]);
    useEffect(() => {
        clickRef.current = _.debounce(() => delayedHandleChange(), 500);
        fetchRandomQuote().then((randomData) => {
            setLoadedQuotes([randomData.data]);
        });
    }, []);
    const delayedHandleChange = () => {
        fetchRandomQuote().then((random) => {
            setLoadedQuotes((prevState) => {
                return [...prevState, random.data];
            });
            console.log(loadedQuotes);
        });
    };
    const clickHandler = () => {
        clickRef.current();
    };
    return (
        <>
            {loadedQuotes.map((quote) => {
                return (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.type}
                        text={quote.setup}
                        punchline={quote.punchline}
                    />
                );
            })}

            <button onClick={clickHandler}>Get more</button>
        </>
    );
};

export default App;

// function useDebounce(text, delay) {
//   delay = delay || 1000;
//   const [debounced, setDebounced] = useState(text);
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebounced(text);
//     }, delay);
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [text, delay]);
//   return debounced;
// }
// export default function JokeAPI() {
//   // state
//   const [joke, setJoke] = useState([]);
//   const [showJoke, setShowJoke] = useState(false);
//   const debounceVal = useDebounce(showJoke);
//   console.log(debounceVal)
//   const getAPI = () => {
//     axios
//       .get("https://official-joke-api.appspot.com/jokes/random")
//       .then((res) => {
//         console.log("setJoke");

//         setJoke(res.data);
//       });
//   };

//   const delayedHandleChange = debounce(() => getAPI(), 500);

//   return (
//     <Fragment>
//       <h2> {joke.setup ? joke.setup : <Fragment />}</h2>
//       <div className="joke">
//         <p className="textarea" style={{ color: "tomato" }}>
//           {" "}
//           {joke.punchline ? joke.punchline : "\nJoke In here"} 😎
//         </p>
//       </div>
//       <div>
//         <button
//           onClick={() => {
//             delayedHandleChange();
//           }}
//         >
//           Click here to joke
//         </button>
//       </div>
//     </Fragment>
//   );
// }
