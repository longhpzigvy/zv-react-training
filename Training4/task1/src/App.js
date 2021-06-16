import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import QuoteItem from "./Component/QuoteItem";
const fetchRandomQuote = () => {
    return axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
};

const App = () => {
    const [loadedQuotes, setLoadedQuotes] = useState([]);
    useEffect(() => {
        fetchRandomQuote().then((randomData) => {
            setLoadedQuotes([randomData.data]);
        });
    }, []);
    const clickHandler = () => {
        fetchRandomQuote().then((random) => {
            setLoadedQuotes((prevState) => {
                return [...prevState, random.data];
            });
            console.log(loadedQuotes);
        });
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
