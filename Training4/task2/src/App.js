import React, { useState, useEffect, useCallback } from "react";
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
    let url = "https://restcountries.eu/rest/v2/all";
    useEffect(() => {
        fetchAllCountries(url).then((randomData) => {
            setLoadedCountries(randomData.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onSearchText = (input) => {
        console.log("GO");
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
    let fSearch = _.debounce(onSearchText, 1000);
    useCallback(() => {
        fSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleInputChange = (event) => {
        const input = event.target.value;
        fSearch(input);
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
