import React, { useState, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";

const Country = () => {
  const [countries, setCountries] = useState([]);

  const fetchdata=(name)=>{
    axios
      .get(`http://localhost:5000/country?keyword=${name}`)
      .then((res) => {
        if (!name) {
          return setCountries([]);
        }
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    const {value}= e.target
    debounceHandleChange(value)
  };

  const debounceHandleChange = useCallback(debounce(nextValue=>fetchdata(nextValue), 1000), []);
  return (
    <div>
      <h1>Search country</h1>
      <input onChange={handleChange} />
      {countries.map((country) => (
        <div>
          <p>The country: {country.name}</p>
          <p>The captial of the country: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default Country;
