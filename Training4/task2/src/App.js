import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import QuoteItem from "./Component/QuoteItem";
import _ from "lodash";

const fetchAllCountries = () => {
    return axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
};

const App = () => {
    const [loadedCountries, setLoadedCountries] = useState([]);
    useEffect(() => {
        fetchAllCountries().then((randomData) => {
            setLoadedCountries(randomData.data);
        });
    }, []);
    const onSearchText = (input) => {
        let url = "https://restcountries.eu/rest/v2/all";
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
    const handleSearchText = _.debounce(onSearchText, 1000);

    const handleInputChange = (event) => {
        const input = event.target.value;
        handleSearchText(input);
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
