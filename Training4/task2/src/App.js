import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import QuoteItem from "./Component/QuoteItem";
import _ from "lodash";

const fetchAllCountries = (url) => {
    return axios
        .get(url)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
};

const App = () => {
    const [loadedCountries, setLoadedCountries] = useState([]);
    const inputRef = useRef();
    let url = "https://restcountries.eu/rest/v2/all";
    useEffect(() => {
        fetchAllCountries(url).then((randomData) => {
            setLoadedCountries(randomData.data);
        });
    }, []);
    useEffect(() => {
        inputRef.current = _.debounce(onSearchText, 1000);
    }, []);
    const onSearchText = (input) => {
        if (input.trim().length !== 0) {
            url = `https://restcountries.eu/rest/v2/name/${input}`;
        }
        axios
            .get(url)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                setLoadedCountries("");
            })
            .then((data) => {
                setLoadedCountries(data);
            });
    };

    const handleInputChange = (event) => {
        const input = event.target.value;
        inputRef.current(input);
    };
    return (
        <>
            <input type="text" onChange={handleInputChange} />
            {loadedCountries &&
                loadedCountries.map((country) => {
                    return <QuoteItem key={country.name} name={country.name} />;
                })}
        </>
    );
};

export default App;
